import { useMemo } from 'react';
import { useImpactStats } from './useApi';
import { IMPACT_STATS } from '../utils/constants';
import type { ImpactStat } from '../types/strapi';

/**
 * A single impact figure, normalised for display.
 *
 * `display` is the pre-formatted string every page renders, so the Home and
 * Donate pages can never show the same figure differently.
 */
export interface ImpactFigure {
  key: string;
  number: number;
  label: string;
  suffix: string;
  display: string;
}

const normalise = (label: string) => label.trim().toLowerCase();

const format = (number: number, suffix: string) => `${number.toLocaleString()}${suffix}`;

// The bundled figures serve two purposes: the offline fallback, and a lookup
// table for recognising a CMS row whose `key`/`suffix` haven't been filled in yet.
const BUNDLED_BY_KEY = new Map(IMPACT_STATS.map((stat) => [stat.key, stat]));
const BUNDLED_BY_LABEL = new Map(IMPACT_STATS.map((stat) => [normalise(stat.label), stat]));

const FALLBACK_FIGURES: ImpactFigure[] = IMPACT_STATS.map((stat) => ({
  key: stat.key,
  number: stat.number,
  label: stat.label,
  suffix: stat.suffix,
  display: format(stat.number, stat.suffix),
}));

/**
 * Normalise a CMS row into a display-ready figure.
 *
 * `key` and `suffix` are new fields, so existing rows return null for them
 * until an admin fills them in. Until then we recognise the stat by its label
 * and borrow those two values from the matching bundled figure — which keeps
 * the site correct regardless of deploy/admin ordering. An explicit value set
 * in Strapi always wins.
 */
const toFigure = (stat: ImpactStat): ImpactFigure => {
  const label = stat.label.trim();
  const bundled =
    (stat.key && BUNDLED_BY_KEY.get(stat.key)) || BUNDLED_BY_LABEL.get(normalise(label));

  const key = stat.key || bundled?.key || label;
  const suffix = stat.suffix ?? bundled?.suffix ?? '';

  return { key, number: stat.number, label, suffix, display: format(stat.number, suffix) };
};

/**
 * The single source of truth for the impact figures on the Home and Donate pages.
 *
 * Values are managed in the Strapi `impact-stat` collection; `IMPACT_STATS` is
 * the fallback for when the CMS is empty or unreachable.
 */
const useImpactFigures = () => {
  const { data, isLoading, isError } = useImpactStats();

  return useMemo(() => {
    const cmsStats: ImpactStat[] | undefined = data?.data;
    const figures = cmsStats?.length ? cmsStats.map(toFigure) : FALLBACK_FIGURES;

    const byKey = new Map(figures.map((figure) => [figure.key, figure]));

    /** Look up one figure, falling back to the bundled copy so a partially
     *  filled-in CMS never renders a blank tile. */
    const get = (key: string): ImpactFigure | undefined =>
      byKey.get(key) ?? FALLBACK_FIGURES.find((figure) => figure.key === key);

    return { figures, byKey, get, isLoading, isError };
  }, [data, isLoading, isError]);
};

export default useImpactFigures;
