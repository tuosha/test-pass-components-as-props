import {createSelector} from '@reduxjs/toolkit';
import {CashScheme} from '../types/cashSheme';
import {getCash} from './getCash';

export const getCashValue = createSelector(getCash, (cash: CashScheme) => cash.value)