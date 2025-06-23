export async function generateStaticParams() {
  return [];
}

export default async function Home({ params }) {
  return (
    <div>
      <pre>
        {JSON.stringify({ params, regeneratedAt: new Date().toISOString() })}
      </pre>
    </div>
  );
}

export const dynamic = "force-static";
