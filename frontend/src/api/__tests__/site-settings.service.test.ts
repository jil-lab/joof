import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getSiteSettings } from '../services/site-settings.service';
import apiClient from '../client';

vi.mock('../client');

const mockGet = vi.mocked(apiClient.get);

describe('getSiteSettings', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls the correct endpoint with populate params', async () => {
    mockGet.mockResolvedValueOnce({
      data: { data: { id: 1, heroHeadline: 'FOR A BRIGHTER FUTURE' }, meta: {} },
    } as never);

    await getSiteSettings();

    expect(mockGet).toHaveBeenCalledWith('/api/site-setting', {
      params: { populate: 'heroImage,missionImage' },
    });
  });

  it('returns the response data', async () => {
    const expected = {
      data: {
        id: 1,
        heroHeadline: 'Test Headline',
        missionBody: 'Test mission',
        contactEmail: 'test@example.com',
      },
      meta: {},
    };
    mockGet.mockResolvedValueOnce({ data: expected } as never);

    const result = await getSiteSettings();

    expect(result).toEqual(expected);
    expect(result.data.heroHeadline).toBe('Test Headline');
  });

  it('propagates errors from the API client', async () => {
    mockGet.mockRejectedValueOnce(new Error('Network Error'));

    await expect(getSiteSettings()).rejects.toThrow('Network Error');
  });
});
