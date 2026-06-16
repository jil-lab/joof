import { describe, it, expect } from 'vitest';
import { queryKeys } from '../queryKeys';

describe('queryKeys', () => {
  it('siteSettings.all returns the correct key', () => {
    expect(queryKeys.siteSettings.all).toEqual(['siteSettings']);
  });

  it('timelineMilestones.all returns the correct key', () => {
    expect(queryKeys.timelineMilestones.all).toEqual(['timelineMilestones']);
  });

  it('advisors.all returns the correct key', () => {
    expect(queryKeys.advisors.all).toEqual(['advisors']);
  });

  it('advisors.detail returns a key scoped by id', () => {
    expect(queryKeys.advisors.detail(5)).toEqual(['advisors', 'detail', 5]);
  });

  it('partners.all returns the correct key', () => {
    expect(queryKeys.partners.all).toEqual(['partners']);
  });

  it('coreValues.all returns the correct key', () => {
    expect(queryKeys.coreValues.all).toEqual(['coreValues']);
  });

  it('teamMembers.detail returns a key scoped by id', () => {
    expect(queryKeys.teamMembers.detail(3)).toEqual(['teamMembers', 'detail', 3]);
  });

  it('programs.list includes filters', () => {
    const key = queryKeys.programs.list({ type: 'healthcare' });
    expect(key).toContain('programs');
    expect(JSON.stringify(key)).toContain('healthcare');
  });

  it('blogPosts.related includes all three parameters', () => {
    const key = queryKeys.blogPosts.related('cat1', 'post1', 3);
    const serialised = JSON.stringify(key);
    expect(serialised).toContain('cat1');
    expect(serialised).toContain('post1');
    expect(serialised).toContain('3');
  });

  it('each entity namespace is unique at the root level', () => {
    const roots = [
      queryKeys.siteSettings.all[0],
      queryKeys.timelineMilestones.all[0],
      queryKeys.advisors.all[0],
      queryKeys.partners.all[0],
      queryKeys.coreValues.all[0],
      queryKeys.teamMembers.all[0],
      queryKeys.programs.all[0],
      queryKeys.impactStats.all[0],
      queryKeys.testimonials.all[0],
      queryKeys.blogPosts.all[0],
    ];
    const unique = new Set(roots);
    expect(unique.size).toBe(roots.length);
  });
});
