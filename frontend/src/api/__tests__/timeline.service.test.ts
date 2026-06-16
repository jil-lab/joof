import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getTimelineMilestones } from '../services/timeline.service';
import apiClient from '../client';

vi.mock('../client');

const mockGet = vi.mocked(apiClient.get);

describe('getTimelineMilestones', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls the correct endpoint sorted by order', async () => {
    mockGet.mockResolvedValueOnce({ data: { data: [], meta: {} } } as never);

    await getTimelineMilestones();

    expect(mockGet).toHaveBeenCalledWith('/api/timeline-milestones', {
      params: { sort: 'order:asc', 'pagination[pageSize]': 50 },
    });
  });

  it('returns an array of milestones', async () => {
    const milestones = [
      { id: 1, year: '2015', title: 'Foundation Established', order: 1 },
      { id: 2, year: '2016', title: 'First Medical Outreach', order: 2 },
    ];
    mockGet.mockResolvedValueOnce({ data: { data: milestones, meta: {} } } as never);

    const result = await getTimelineMilestones();

    expect(result.data).toHaveLength(2);
    expect(result.data[0].year).toBe('2015');
    expect(result.data[1].title).toBe('First Medical Outreach');
  });

  it('propagates network errors', async () => {
    mockGet.mockRejectedValueOnce(new Error('Network Error'));

    await expect(getTimelineMilestones()).rejects.toThrow('Network Error');
  });
});
