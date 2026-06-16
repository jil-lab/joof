import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getPrograms, getProgram, getProgramsByType } from '../services/programs.service';
import apiClient from '../client';

vi.mock('../client');

const mockGet = vi.mocked(apiClient.get);

describe('getPrograms', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches programs with images populated', async () => {
    mockGet.mockResolvedValueOnce({ data: { data: [], meta: {} } } as never);

    await getPrograms();

    expect(mockGet).toHaveBeenCalledWith('/api/programs', {
      params: { populate: 'featuredImage,images', sort: 'order:asc' },
    });
  });
});

describe('getProgramsByType', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('filters by type via query param', async () => {
    mockGet.mockResolvedValueOnce({ data: { data: [], meta: {} } } as never);

    await getProgramsByType('healthcare');

    expect(mockGet).toHaveBeenCalledWith('/api/programs', {
      params: {
        populate: 'featuredImage,images',
        'filters[type][$eq]': 'healthcare',
        sort: 'order:asc',
      },
    });
  });

  it('returns programs of the requested type', async () => {
    const programs = [
      { id: 1, title: 'Healthcare Programs', type: 'healthcare', order: 1 },
    ];
    mockGet.mockResolvedValueOnce({ data: { data: programs, meta: {} } } as never);

    const result = await getProgramsByType('healthcare');

    expect(result.data[0].type).toBe('healthcare');
  });
});

describe('getProgram', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches single program by id', async () => {
    mockGet.mockResolvedValueOnce({
      data: { data: { id: 1, title: 'Healthcare' }, meta: {} },
    } as never);

    await getProgram(1);

    expect(mockGet).toHaveBeenCalledWith('/api/programs/1', expect.any(Object));
  });
});
