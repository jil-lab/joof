import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getAdvisors, getAdvisor } from '../services/advisors.service';
import apiClient from '../client';

vi.mock('../client');

const mockGet = vi.mocked(apiClient.get);

describe('getAdvisors', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches all advisors with photo populated', async () => {
    mockGet.mockResolvedValueOnce({ data: { data: [], meta: {} } } as never);

    await getAdvisors();

    expect(mockGet).toHaveBeenCalledWith('/api/advisors', {
      params: { populate: 'photo', sort: 'order:asc' },
    });
  });

  it('returns advisors sorted by order', async () => {
    const advisors = [
      { id: 1, name: 'Dr. Smith', domain: 'Medicine', order: 1 },
      { id: 2, name: 'Prof. Jones', domain: 'Finance', order: 2 },
    ];
    mockGet.mockResolvedValueOnce({ data: { data: advisors, meta: {} } } as never);

    const result = await getAdvisors();

    expect(result.data).toHaveLength(2);
    expect(result.data[0].name).toBe('Dr. Smith');
  });
});

describe('getAdvisor', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches a single advisor by id with photo populated', async () => {
    mockGet.mockResolvedValueOnce({
      data: { data: { id: 1, name: 'Dr. Smith' }, meta: {} },
    } as never);

    await getAdvisor(1);

    expect(mockGet).toHaveBeenCalledWith('/api/advisors/1', {
      params: { populate: 'photo' },
    });
  });

  it('accepts string id', async () => {
    mockGet.mockResolvedValueOnce({
      data: { data: { id: 5, name: 'Prof. Jones' }, meta: {} },
    } as never);

    await getAdvisor('5');

    expect(mockGet).toHaveBeenCalledWith('/api/advisors/5', expect.any(Object));
  });
});
