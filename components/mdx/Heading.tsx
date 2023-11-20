import React from 'react';
import { Text, As } from '@chakra-ui/react'

interface HeadingProps {
    children: React.ReactNode;
    level: As;
    size: string;
    weight: string;
    family?: string;
}

function Heading({ children, level, size, weight, family="mono" }: HeadingProps) {
    return (
        <Text as={level} fontSize={size} fontWeight={weight} fontFamily={family}>{children}</Text>
    );
}

export default Heading;