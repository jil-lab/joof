import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getImpactStats } from '../services/impact-stats.service';
import apiClient from '../client';

vi.mock('../client');

const mockGet = vi.mocked(apiClient.get);

describe('getImpactStats', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls the correct endpoint sorted by order', async () => {
    mockGet.mockResolvedValueOnce({ data: { data: [], meta: {} } } as never);

    await getImpactStats();

    expect(mockGet).toHaveBeenCalledWith('/api/impact-stats', {
      params: { sort: 'order:asc' },
    });
  });

  it('returns impact stats with correct shape', async () => {
    const stats = [
      { id: 1, key: 'medical-care', label: 'Medical Care Recipients', number: 4000, suffix: '+', order: 5 },
      { id: 2, key: 'safe-deliveries', label: 'Safe Deliveries', number: 29, suffix: '', order: 6 },
    ];
    mockGet.mockResolvedValueOnce({ data: { data: stats, meta: {} } } as never);

    const result = await getImpactStats();

    expect(result.data[0].number).toBe(4000);
    expect(result.data[0].suffix).toBe('+');
    expect(result.data[1].label).toBe('Safe Deliveries');
  });
});
