import NextLink from 'next/link';
import { classed } from '@tw-classed/react';
import { BaseButton } from 'presentation/component/common/control/Button';

export const BaseButtonLink = classed(NextLink, BaseButton, 'max-w-max');
