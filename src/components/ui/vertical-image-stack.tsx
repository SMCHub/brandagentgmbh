import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  objectPosition?: string;
}

interface VerticalImageStackProps {
  members: TeamMember[];
}

export function VerticalImageStack({ members }: VerticalImageStackProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex flex-row items-center justify-center gap-10 sm:gap-14">
        {members.map((member) => (
          <div
            key={member.name}
            className="relative w-72 h-96 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-lg"
          >
            <div className="relative w-full h-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                style={{ objectPosition: member.objectPosition || "center" }}
                sizes="(max-width: 768px) 100vw, 288px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">
                  {member.name}
                </h3>
                <p className="text-white/70 text-xs">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
