import TeamMemberCard from './TeamMemberCard';

const TeamGrid = ({ members }) => {
  if (!members || members.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No team members to display.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {members.map((member, index) => (
        <TeamMemberCard
          key={member.id}
          member={member}
          index={index}
        />
      ))}
    </div>
  );
};

export default TeamGrid;
