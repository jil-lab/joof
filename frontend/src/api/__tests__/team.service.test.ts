import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getTeamMembers, getTeamMember } from '../services/team.service';
import apiClient from '../client';

vi.mock('../client');

const mockGet = vi.mocked(apiClient.get);

describe('getTeamMembers', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches all team members with photo populated and sorted', async () => {
    mockGet.mockResolvedValueOnce({ data: { data: [], meta: {} } } as never);

    await getTeamMembers();

    expect(mockGet).toHaveBeenCalledWith('/api/team-members', {
      params: { populate: 'photo', sort: 'order:asc' },
    });
  });

  it('returns team member list', async () => {
    const members = [
      { id: 1, name: 'Deaconess Bolanle Olabisi', role: 'Chairperson', order: 1 },
    ];
    mockGet.mockResolvedValueOnce({ data: { data: members, meta: {} } } as never);

    const result = await getTeamMembers();

    expect(result.data).toHaveLength(1);
    expect(result.data[0].name).toBe('Deaconess Bolanle Olabisi');
  });
});

describe('getTeamMember', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches a single member by id', async () => {
    mockGet.mockResolvedValueOnce({
      data: { data: { id: 3, name: 'Mrs. Adetola Amure' }, meta: {} },
    } as never);

    await getTeamMember(3);

    expect(mockGet).toHaveBeenCalledWith('/api/team-members/3', {
      params: { populate: 'photo' },
    });
  });
});
