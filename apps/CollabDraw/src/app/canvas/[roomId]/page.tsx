// pages/index.tsx

import CollabDraw from "../../../components/CollabDraw"; // adjust the path as needed
export default async function HomePage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const param = await params;

  return (
    <div>
      <CollabDraw roomId={parseInt(param.roomId)} />
    </div>
  );
}
