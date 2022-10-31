/*
  Copyright 2022. Whatssub co.,Ltd.

  This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
*/

import type { ObjectElements } from '@type/Tools.type';

/**
 * ID
 */
export type ID = string;

/**
 * TimeStamp
 */
export type TimeStamp = number;

/**
 * Image
 */
export type Image = any;

/**
 * Phone Number
 */
export type Phone = string;

/**
 * Currency Enum
 * We didn't use enum because it cannot be tree shaken
 */
export const Currency = {
  KoreanWon: 'KRW',
  USDollar: 'USD',
  IndianRupee: 'INR',
  ArgentinianNuevoPeso: 'ARS',
  TurkishLira: 'TRY',
  Euro: 'EUR',
  PoundSterling: 'GBP',
  RussianRuble: 'RUB',
  JapanYen: 'JPY',
  AustralianDollar: 'AUD',
  ArabEmiratesDirham: 'AED',
  IndonesianRupiah: 'IDR',
  PolishZloty: 'PLN',
  CanadianDollar: 'CAD',
  VietnameseDong: 'VND',
  BrazilianReal: 'BRL',
  SouthAfricanRand: 'ZAR',
  SingaporeDollar: 'SGD',
  MalaysianRinggit: 'MYR',
} as const;

/**
 * Currency
 */
export type Currency = ObjectElements<typeof Currency>;

/**
 * URI
 */
export type URI = string;

/**
 * License Enum
 */
export const License = {
  ISC: 'ISC',
  MIT: 'MIT',
  'Apache-2.0': 'Apache-2.0',
  'BSD-3-Clause': 'BSD-3-Clause',
  'GPL-3.0': 'GPL-3.0',
};

/**
 * License
 */
export type License = ObjectElements<typeof License>;

/**
 * Semantic Version
 */
export type SemVersion = `${number}.${number}.${number}`;
