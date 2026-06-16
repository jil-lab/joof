import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getCoreValues } from '../services/core-values.service';
import apiClient from '../client';

vi.mock('../client');

const mockGet = vi.mocked(apiClient.get);

describe('getCoreValues', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls the correct endpoint sorted by order', async () => {
    mockGet.mockResolvedValueOnce({ data: { data: [], meta: {} } } as never);

    await getCoreValues();

    expect(mockGet).toHaveBeenCalledWith('/api/core-values', {
      params: { sort: 'order:asc' },
    });
  });

  it('returns all core values', async () => {
    const values = [
      { id: 1, title: 'Compassion', icon: '❤️', order: 1 },
      { id: 2, title: 'Excellence', icon: '⭐', order: 2 },
      { id: 3, title: 'Integrity', icon: '🤝', order: 3 },
    ];
    mockGet.mockResolvedValueOnce({ data: { data: values, meta: {} } } as never);

    const result = await getCoreValues();

    expect(result.data).toHaveLength(3);
    expect(result.data[0].title).toBe('Compassion');
    expect(result.data[2].icon).toBe('🤝');
  });

  it('propagates errors', async () => {
    mockGet.mockRejectedValueOnce(new Error('500 Internal Server Error'));

    await expect(getCoreValues()).rejects.toThrow('500 Internal Server Error');
  });
});
