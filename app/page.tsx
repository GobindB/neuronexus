import { Jolly_Lodger } from 'next/font/google';

const jollyLodger = Jolly_Lodger({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`container ${jollyLodger.className}`}>
      <div className="title-text">
        GB
      </div>
    </div>
  );
}
