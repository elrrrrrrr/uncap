import useInfo from '@/hooks/useInfo';

export default function HomePage() {
  const nameRes = useInfo();
  return (
    <div>
      <h2>fly me to the moon</h2>
      <code>
        {JSON.stringify(nameRes, null, 2)}
      </code>
    </div>
  );
}
