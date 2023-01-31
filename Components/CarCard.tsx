import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import styles from "../styles/Home.module.css";

{
    /*<Link
            href="/car/[make]/[brand]/[id]"
            as={`/car/${brand}/${model}/${id}`}
        >
        const useStyles = makeStyles((theme :any) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    achorTag: {
        textDecoration: 'none'
    }
}));

        */
}
export interface CarCardProps {
    id:any,
    image: string ,
    name: string ,
    brand:string,
    model:string,
    price:any
}


export default function CarCard({ id, image, name, brand, model, price }: CarCardProps) {
    return (
        <div className={styles.cardcontainer} key={id}>
            <Image
            className={styles.cardimage}
            src={image}
            width={210}
            height={175}
            />
            <div className={styles.cardtitle}>
                {brand + ' ' + model +' ' + name}
            </div>
            <div className={styles.cardPricecontainer}>
                <div className={styles.cardPrice}>{`€ ${price}`}</div>
            </div>
        </div>


    );
}
