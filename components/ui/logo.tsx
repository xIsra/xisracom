import Link from "next/link";
import AwesomeBox from "@/components/ui/AwesomeBox";
import {getRandomGoodbyes, getRandomGreetings} from "@/libs/greetings";
import {useCallback, useEffect, useMemo, useState} from "react";

export const backgroundAwesomeStyles = {
    backgroundColor: '#ec407a',
    backgroundImage: `linear-gradient(45deg, '#fdd835' 0%, '#f06292' 100%)`,
    color: 'inherit'
};

export default function Logo({type = 'default'}) {
    const getSecondary = useCallback(() => {
        if (type === 'default')
            return getRandomGreetings()
        if (type === 'footer') return getRandomGoodbyes()
    }, [type]);

    return (
        <Link href="/" className="inline-flex" aria-label="xisracom" data-aos="fade-right">
            <AwesomeBox primary={'xisra.com'}
                        secondary={useMemo(()=>getSecondary(), [getSecondary])}/>
        </Link>
    );
}
