import './index.css';
import Viewer from '@/components/Viewer';
import useInfo from '@/hooks/useInfo';

export default function HomePage() {
  const nameRes = useInfo();
  return <Viewer />;
}
