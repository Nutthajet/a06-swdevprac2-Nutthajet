import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner(){
    return (
        <div className={styles.banner}>
            <Image src={'/img/banner.jpg'}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <div className='text-4xl font-semibold text-white font-sans'>where every event finds its venue</div>
                <div className='text-base font-normal text-white font-sans'>Finding the perfect venue has never been easier, Whether it's a wedding, corporate event, or private party, we connecting people to the perfect place.</div>
            </div>
        </div>
    );
}