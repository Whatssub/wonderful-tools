/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * ### SPDXLicense
 *
 * Pre defined licenses follows SPDX.
 *
 * @reference https://spdx.org/licenses/
 */
export enum SPDXLicense {
  /**
   * BSD Zero Clause License
   */
  'BSD Zero Clause License' = '0BSD',

  /**
   * Attribution Assurance License
   */
  'Attribution Assurance License' = 'AAL',

  /**
   * Abstyles License
   */
  'Abstyles License' = 'Abstyles',

  /**
   * AdaCore Doc License
   */
  'AdaCore Doc License' = 'AdaCore-doc',

  /**
   * Adobe Systems Incorporated Source Code License Agreement
   */
  'Adobe Systems Incorporated Source Code License Agreement' = 'Adobe-2006',

  /**
   * Adobe Glyph List License
   */
  'Adobe Glyph List License' = 'Adobe-Glyph',

  /**
   * Amazon Digital Services License
   */
  'Amazon Digital Services License' = 'ADSL',

  /**
   * Academic Free License v1.1
   */
  'Academic Free License v1.1' = 'AFL-1.1',

  /**
   * Academic Free License v1.2
   */
  'Academic Free License v1.2' = 'AFL-1.2',

  /**
   * Academic Free License v2.0
   */
  'Academic Free License v2.0' = 'AFL-2.0',

  /**
   * Academic Free License v2.1
   */
  'Academic Free License v2.1' = 'AFL-2.1',

  /**
   * Academic Free License v3.0
   */
  'Academic Free License v3.0' = 'AFL-3.0',

  /**
   * Afmparse License
   */
  'Afmparse License' = 'Afmparse',

  /**
   * Affero General Public License v1.0 only
   */
  'Affero General Public License v1.0 only' = 'AGPL-1.0-only',

  /**
   * Affero General Public License v1.0 or later
   */
  'Affero General Public License v1.0 or later' = 'AGPL-1.0-or-later',

  /**
   * GNU Affero General Public License v3.0 only
   */
  'GNU Affero General Public License v3.0 only' = 'AGPL-3.0-only',

  /**
   * GNU Affero General Public License v3.0 or later
   */
  'GNU Affero General Public License v3.0 or later' = 'AGPL-3.0-or-later',

  /**
   * Aladdin Free Public License
   */
  'Aladdin Free Public License' = 'Aladdin',

  /**
   * AMD's plpa_map.c License
   */
  "AMD's plpa_map.c License" = 'AMDPLPA',

  /**
   * Apple MIT License
   */
  'Apple MIT License' = 'AML',

  /**
   * Academy of Motion Picture Arts and Sciences BSD
   */
  'Academy of Motion Picture Arts and Sciences BSD' = 'AMPAS',

  /**
   * ANTLR Software Rights Notice
   */
  'ANTLR Software Rights Notice' = 'ANTLR-PD',

  /**
   * ANTLR Software Rights Notice with license fallback
   */
  'ANTLR Software Rights Notice with license fallback' = 'ANTLR-PD-fallback',

  /**
   * Apache License 1.0
   */
  'Apache License 1.0' = 'Apache-1.0',

  /**
   * Apache License 1.1
   */
  'Apache License 1.1' = 'Apache-1.1',

  /**
   * Apache License 2.0
   */
  'Apache License 2.0' = 'Apache-2.0',

  /**
   * Adobe Postscript AFM License
   */
  'Adobe Postscript AFM License' = 'APAFML',

  /**
   * Adaptive Public License 1.0
   */
  'Adaptive Public License 1.0' = 'APL-1.0',

  /**
   * App::s2p License
   */
  'App::s2p License' = 'App-s2p',

  /**
   * Apple Public Source License 1.0
   */
  'Apple Public Source License 1.0' = 'APSL-1.0',

  /**
   * Apple Public Source License 1.1
   */
  'Apple Public Source License 1.1' = 'APSL-1.1',

  /**
   * Apple Public Source License 1.2
   */
  'Apple Public Source License 1.2' = 'APSL-1.2',

  /**
   * Apple Public Source License 2.0
   */
  'Apple Public Source License 2.0' = 'APSL-2.0',

  /**
   * Arphic Public License
   */
  'Arphic Public License' = 'Arphic-1999',

  /**
   * Artistic License 1.0
   */
  'Artistic License 1.0' = 'Artistic-1.0',

  /**
   * Artistic License 1.0 w/clause 8
   */
  'Artistic License 1.0 w/clause 8' = 'Artistic-1.0-cl8',

  /**
   * Artistic License 1.0 (Perl)
   */
  'Artistic License 1.0 (Perl)' = 'Artistic-1.0-Perl',

  /**
   * Artistic License 2.0
   */
  'Artistic License 2.0' = 'Artistic-2.0',

  /**
   * ASWF Digital Assets License version 1.0
   */
  'ASWF Digital Assets License version 1.0' = 'ASWF-Digital-Assets-1.0',

  /**
   * ASWF Digital Assets License 1.1
   */
  'ASWF Digital Assets License 1.1' = 'ASWF-Digital-Assets-1.1',

  /**
   * Baekmuk License
   */
  'Baekmuk License' = 'Baekmuk',

  /**
   * Bahyph License
   */
  'Bahyph License' = 'Bahyph',

  /**
   * Barr License
   */
  'Barr License' = 'Barr',

  /**
   * Beerware License
   */
  'Beerware License' = 'Beerware',

  /**
   * Bitstream Charter Font License
   */
  'Bitstream Charter Font License' = 'Bitstream-Charter',

  /**
   * Bitstream Vera Font License
   */
  'Bitstream Vera Font License' = 'Bitstream-Vera',

  /**
   * BitTorrent Open Source License v1.0
   */
  'BitTorrent Open Source License v1.0' = 'BitTorrent-1.0',

  /**
   * BitTorrent Open Source License v1.1
   */
  'BitTorrent Open Source License v1.1' = 'BitTorrent-1.1',

  /**
   * SQLite Blessing
   */
  'SQLite Blessing' = 'blessing',

  /**
   * Blue Oak Model License 1.0.0
   */
  'Blue Oak Model License 1.0.0' = 'BlueOak-1.0.0',

  /**
   * Boehm-Demers-Weiser GC License
   */
  'Boehm-Demers-Weiser GC License' = 'Boehm-GC',

  /**
   * Borceux license
   */
  'Borceux license' = 'Borceux',

  /**
   * Brian Gladman 3-Clause License
   */
  'Brian Gladman 3-Clause License' = 'Brian-Gladman-3-Clause',

  /**
   * BSD 1-Clause License
   */
  'BSD 1-Clause License' = 'BSD-1-Clause',

  /**
   * BSD 2-Clause "Simplified" License
   */
  'BSD 2-Clause "Simplified" License' = 'BSD-2-Clause',

  /**
   * BSD-2-Clause Plus Patent License
   */
  'BSD-2-Clause Plus Patent License' = 'BSD-2-Clause-Patent',

  /**
   * BSD 2-Clause with views sentence
   */
  'BSD 2-Clause with views sentence' = 'BSD-2-Clause-Views',

  /**
   * BSD 3-Clause "New" or "Revised" License
   */
  'BSD 3-Clause "New" or "Revised" License' = 'BSD-3-Clause',

  /**
   * BSD with attribution
   */
  'BSD with attribution' = 'BSD-3-Clause-Attribution',

  /**
   * BSD 3-Clause Clear License
   */
  'BSD 3-Clause Clear License' = 'BSD-3-Clause-Clear',

  /**
   * Lawrence Berkeley National Labs BSD variant license
   */
  'Lawrence Berkeley National Labs BSD variant license' = 'BSD-3-Clause-LBNL',

  /**
   * BSD 3-Clause Modification
   */
  'BSD 3-Clause Modification' = 'BSD-3-Clause-Modification',

  /**
   * BSD 3-Clause No Military License
   */
  'BSD 3-Clause No Military License' = 'BSD-3-Clause-No-Military-License',

  /**
   * BSD 3-Clause No Nuclear License
   */
  'BSD 3-Clause No Nuclear License' = 'BSD-3-Clause-No-Nuclear-License',

  /**
   * BSD 3-Clause No Nuclear License 2014
   */
  'BSD 3-Clause No Nuclear License 2014' = 'BSD-3-Clause-No-Nuclear-License-2014',

  /**
   * BSD 3-Clause No Nuclear Warranty
   */
  'BSD 3-Clause No Nuclear Warranty' = 'BSD-3-Clause-No-Nuclear-Warranty',

  /**
   * BSD 3-Clause Open MPI variant
   */
  'BSD 3-Clause Open MPI variant' = 'BSD-3-Clause-Open-MPI',

  /**
   * BSD 4-Clause "Original" or "Old" License
   */
  'BSD 4-Clause "Original" or "Old" License' = 'BSD-4-Clause',

  /**
   * BSD 4 Clause Shortened
   */
  'BSD 4 Clause Shortened' = 'BSD-4-Clause-Shortened',

  /**
   * BSD-4-Clause (University of California-Specific)
   */
  'BSD-4-Clause (University of California-Specific)' = 'BSD-4-Clause-UC',

  /**
   * BSD 4.3 RENO License
   */
  'BSD 4.3 RENO License' = 'BSD-4.3RENO',

  /**
   * BSD 4.3 TAHOE License
   */
  'BSD 4.3 TAHOE License' = 'BSD-4.3TAHOE',

  /**
   * BSD Advertising Acknowledgement License
   */
  'BSD Advertising Acknowledgement License' = 'BSD-Advertising-Acknowledgement',

  /**
   * BSD with Attribution and HPND disclaimer
   */
  'BSD with Attribution and HPND disclaimer' = 'BSD-Attribution-HPND-disclaimer',

  /**
   * BSD Protection License
   */
  'BSD Protection License' = 'BSD-Protection',

  /**
   * BSD Source Code Attribution
   */
  'BSD Source Code Attribution' = 'BSD-Source-Code',

  /**
   * Boost Software License 1.0
   */
  'Boost Software License 1.0' = 'BSL-1.0',

  /**
   * Business Source License 1.1
   */
  'Business Source License 1.1' = 'BUSL-1.1',

  /**
   * bzip2 and libbzip2 License v1.0.6
   */
  'bzip2 and libbzip2 License v1.0.6' = 'bzip2-1.0.6',

  /**
   * Computational Use of Data Agreement v1.0
   */
  'Computational Use of Data Agreement v1.0' = 'C-UDA-1.0',

  /**
   * Cryptographic Autonomy License 1.0
   */
  'Cryptographic Autonomy License 1.0' = 'CAL-1.0',

  /**
   * Cryptographic Autonomy License 1.0 (Combined Work Exception)
   */
  'Cryptographic Autonomy License 1.0 (Combined Work Exception)' = 'CAL-1.0-Combined-Work-Exception',

  /**
   * Caldera License
   */
  'Caldera License' = 'Caldera',

  /**
   * Computer Associates Trusted Open Source License 1.1
   */
  'Computer Associates Trusted Open Source License 1.1' = 'CATOSL-1.1',

  /**
   * Creative Commons Attribution 1.0 Generic
   */
  'Creative Commons Attribution 1.0 Generic' = 'CC-BY-1.0',

  /**
   * Creative Commons Attribution 2.0 Generic
   */
  'Creative Commons Attribution 2.0 Generic' = 'CC-BY-2.0',

  /**
   * Creative Commons Attribution 2.5 Generic
   */
  'Creative Commons Attribution 2.5 Generic' = 'CC-BY-2.5',

  /**
   * Creative Commons Attribution 2.5 Australia
   */
  'Creative Commons Attribution 2.5 Australia' = 'CC-BY-2.5-AU',

  /**
   * Creative Commons Attribution 3.0 Unported
   */
  'Creative Commons Attribution 3.0 Unported' = 'CC-BY-3.0',

  /**
   * Creative Commons Attribution 3.0 Austria
   */
  'Creative Commons Attribution 3.0 Austria' = 'CC-BY-3.0-AT',

  /**
   * Creative Commons Attribution 3.0 Germany
   */
  'Creative Commons Attribution 3.0 Germany' = 'CC-BY-3.0-DE',

  /**
   * Creative Commons Attribution 3.0 IGO
   */
  'Creative Commons Attribution 3.0 IGO' = 'CC-BY-3.0-IGO',

  /**
   * Creative Commons Attribution 3.0 Netherlands
   */
  'Creative Commons Attribution 3.0 Netherlands' = 'CC-BY-3.0-NL',

  /**
   * Creative Commons Attribution 3.0 United States
   */
  'Creative Commons Attribution 3.0 United States' = 'CC-BY-3.0-US',

  /**
   * Creative Commons Attribution 4.0 International
   */
  'Creative Commons Attribution 4.0 International' = 'CC-BY-4.0',

  /**
   * Creative Commons Attribution Non Commercial 1.0 Generic
   */
  'Creative Commons Attribution Non Commercial 1.0 Generic' = 'CC-BY-NC-1.0',

  /**
   * Creative Commons Attribution Non Commercial 2.0 Generic
   */
  'Creative Commons Attribution Non Commercial 2.0 Generic' = 'CC-BY-NC-2.0',

  /**
   * Creative Commons Attribution Non Commercial 2.5 Generic
   */
  'Creative Commons Attribution Non Commercial 2.5 Generic' = 'CC-BY-NC-2.5',

  /**
   * Creative Commons Attribution Non Commercial 3.0 Unported
   */
  'Creative Commons Attribution Non Commercial 3.0 Unported' = 'CC-BY-NC-3.0',

  /**
   * Creative Commons Attribution Non Commercial 3.0 Germany
   */
  'Creative Commons Attribution Non Commercial 3.0 Germany' = 'CC-BY-NC-3.0-DE',

  /**
   * Creative Commons Attribution Non Commercial 4.0 International
   */
  'Creative Commons Attribution Non Commercial 4.0 International' = 'CC-BY-NC-4.0',

  /**
   * Creative Commons Attribution Non Commercial No Derivatives 1.0 Generic
   */
  'Creative Commons Attribution Non Commercial No Derivatives 1.0 Generic' = 'CC-BY-NC-ND-1.0',

  /**
   * Creative Commons Attribution Non Commercial No Derivatives 2.0 Generic
   */
  'Creative Commons Attribution Non Commercial No Derivatives 2.0 Generic' = 'CC-BY-NC-ND-2.0',

  /**
   * Creative Commons Attribution Non Commercial No Derivatives 2.5 Generic
   */
  'Creative Commons Attribution Non Commercial No Derivatives 2.5 Generic' = 'CC-BY-NC-ND-2.5',

  /**
   * Creative Commons Attribution Non Commercial No Derivatives 3.0 Unported
   */
  'Creative Commons Attribution Non Commercial No Derivatives 3.0 Unported' = 'CC-BY-NC-ND-3.0',

  /**
   * Creative Commons Attribution Non Commercial No Derivatives 3.0 Germany
   */
  'Creative Commons Attribution Non Commercial No Derivatives 3.0 Germany' = 'CC-BY-NC-ND-3.0-DE',

  /**
   * Creative Commons Attribution Non Commercial No Derivatives 3.0 IGO
   */
  'Creative Commons Attribution Non Commercial No Derivatives 3.0 IGO' = 'CC-BY-NC-ND-3.0-IGO',

  /**
   * Creative Commons Attribution Non Commercial No Derivatives 4.0 International
   */
  'Creative Commons Attribution Non Commercial No Derivatives 4.0 International' = 'CC-BY-NC-ND-4.0',

  /**
   * Creative Commons Attribution Non Commercial Share Alike 1.0 Generic
   */
  'Creative Commons Attribution Non Commercial Share Alike 1.0 Generic' = 'CC-BY-NC-SA-1.0',

  /**
   * Creative Commons Attribution Non Commercial Share Alike 2.0 Generic
   */
  'Creative Commons Attribution Non Commercial Share Alike 2.0 Generic' = 'CC-BY-NC-SA-2.0',

  /**
   * Creative Commons Attribution Non Commercial Share Alike 2.0 Germany
   */
  'Creative Commons Attribution Non Commercial Share Alike 2.0 Germany' = 'CC-BY-NC-SA-2.0-DE',

  /**
   * Creative Commons Attribution-NonCommercial-ShareAlike 2.0 France
   */
  'Creative Commons Attribution-NonCommercial-ShareAlike 2.0 France' = 'CC-BY-NC-SA-2.0-FR',

  /**
   * Creative Commons Attribution Non Commercial Share Alike 2.0 England and Wales
   */
  'Creative Commons Attribution Non Commercial Share Alike 2.0 England and Wales' = 'CC-BY-NC-SA-2.0-UK',

  /**
   * Creative Commons Attribution Non Commercial Share Alike 2.5 Generic
   */
  'Creative Commons Attribution Non Commercial Share Alike 2.5 Generic' = 'CC-BY-NC-SA-2.5',

  /**
   * Creative Commons Attribution Non Commercial Share Alike 3.0 Unported
   */
  'Creative Commons Attribution Non Commercial Share Alike 3.0 Unported' = 'CC-BY-NC-SA-3.0',

  /**
   * Creative Commons Attribution Non Commercial Share Alike 3.0 Germany
   */
  'Creative Commons Attribution Non Commercial Share Alike 3.0 Germany' = 'CC-BY-NC-SA-3.0-DE',

  /**
   * Creative Commons Attribution Non Commercial Share Alike 3.0 IGO
   */
  'Creative Commons Attribution Non Commercial Share Alike 3.0 IGO' = 'CC-BY-NC-SA-3.0-IGO',

  /**
   * Creative Commons Attribution Non Commercial Share Alike 4.0 International
   */
  'Creative Commons Attribution Non Commercial Share Alike 4.0 International' = 'CC-BY-NC-SA-4.0',

  /**
   * Creative Commons Attribution No Derivatives 1.0 Generic
   */
  'Creative Commons Attribution No Derivatives 1.0 Generic' = 'CC-BY-ND-1.0',

  /**
   * Creative Commons Attribution No Derivatives 2.0 Generic
   */
  'Creative Commons Attribution No Derivatives 2.0 Generic' = 'CC-BY-ND-2.0',

  /**
   * Creative Commons Attribution No Derivatives 2.5 Generic
   */
  'Creative Commons Attribution No Derivatives 2.5 Generic' = 'CC-BY-ND-2.5',

  /**
   * Creative Commons Attribution No Derivatives 3.0 Unported
   */
  'Creative Commons Attribution No Derivatives 3.0 Unported' = 'CC-BY-ND-3.0',

  /**
   * Creative Commons Attribution No Derivatives 3.0 Germany
   */
  'Creative Commons Attribution No Derivatives 3.0 Germany' = 'CC-BY-ND-3.0-DE',

  /**
   * Creative Commons Attribution No Derivatives 4.0 International
   */
  'Creative Commons Attribution No Derivatives 4.0 International' = 'CC-BY-ND-4.0',

  /**
   * Creative Commons Attribution Share Alike 1.0 Generic
   */
  'Creative Commons Attribution Share Alike 1.0 Generic' = 'CC-BY-SA-1.0',

  /**
   * Creative Commons Attribution Share Alike 2.0 Generic
   */
  'Creative Commons Attribution Share Alike 2.0 Generic' = 'CC-BY-SA-2.0',

  /**
   * Creative Commons Attribution Share Alike 2.0 England and Wales
   */
  'Creative Commons Attribution Share Alike 2.0 England and Wales' = 'CC-BY-SA-2.0-UK',

  /**
   * Creative Commons Attribution Share Alike 2.1 Japan
   */
  'Creative Commons Attribution Share Alike 2.1 Japan' = 'CC-BY-SA-2.1-JP',

  /**
   * Creative Commons Attribution Share Alike 2.5 Generic
   */
  'Creative Commons Attribution Share Alike 2.5 Generic' = 'CC-BY-SA-2.5',

  /**
   * Creative Commons Attribution Share Alike 3.0 Unported
   */
  'Creative Commons Attribution Share Alike 3.0 Unported' = 'CC-BY-SA-3.0',

  /**
   * Creative Commons Attribution Share Alike 3.0 Austria
   */
  'Creative Commons Attribution Share Alike 3.0 Austria' = 'CC-BY-SA-3.0-AT',

  /**
   * Creative Commons Attribution Share Alike 3.0 Germany
   */
  'Creative Commons Attribution Share Alike 3.0 Germany' = 'CC-BY-SA-3.0-DE',

  /**
   * Creative Commons Attribution-ShareAlike 3.0 IGO
   */
  'Creative Commons Attribution-ShareAlike 3.0 IGO' = 'CC-BY-SA-3.0-IGO',

  /**
   * Creative Commons Attribution Share Alike 4.0 International
   */
  'Creative Commons Attribution Share Alike 4.0 International' = 'CC-BY-SA-4.0',

  /**
   * Creative Commons Public Domain Dedication and Certification
   */
  'Creative Commons Public Domain Dedication and Certification' = 'CC-PDDC',

  /**
   * Creative Commons Zero v1.0 Universal
   */
  'Creative Commons Zero v1.0 Universal' = 'CC0-1.0',

  /**
   * Common Development and Distribution License 1.0
   */
  'Common Development and Distribution License 1.0' = 'CDDL-1.0',

  /**
   * Common Development and Distribution License 1.1
   */
  'Common Development and Distribution License 1.1' = 'CDDL-1.1',

  /**
   * Common Documentation License 1.0
   */
  'Common Documentation License 1.0' = 'CDL-1.0',

  /**
   * Community Data License Agreement Permissive 1.0
   */
  'Community Data License Agreement Permissive 1.0' = 'CDLA-Permissive-1.0',

  /**
   * Community Data License Agreement Permissive 2.0
   */
  'Community Data License Agreement Permissive 2.0' = 'CDLA-Permissive-2.0',

  /**
   * Community Data License Agreement Sharing 1.0
   */
  'Community Data License Agreement Sharing 1.0' = 'CDLA-Sharing-1.0',

  /**
   * CeCILL Free Software License Agreement v1.0
   */
  'CeCILL Free Software License Agreement v1.0' = 'CECILL-1.0',

  /**
   * CeCILL Free Software License Agreement v1.1
   */
  'CeCILL Free Software License Agreement v1.1' = 'CECILL-1.1',

  /**
   * CeCILL Free Software License Agreement v2.0
   */
  'CeCILL Free Software License Agreement v2.0' = 'CECILL-2.0',

  /**
   * CeCILL Free Software License Agreement v2.1
   */
  'CeCILL Free Software License Agreement v2.1' = 'CECILL-2.1',

  /**
   * CeCILL-B Free Software License Agreement
   */
  'CeCILL-B Free Software License Agreement' = 'CECILL-B',

  /**
   * CeCILL-C Free Software License Agreement
   */
  'CeCILL-C Free Software License Agreement' = 'CECILL-C',

  /**
   * CERN Open Hardware Licence v1.1
   */
  'CERN Open Hardware Licence v1.1' = 'CERN-OHL-1.1',

  /**
   * CERN Open Hardware Licence v1.2
   */
  'CERN Open Hardware Licence v1.2' = 'CERN-OHL-1.2',

  /**
   * CERN Open Hardware Licence Version 2 - Permissive
   */
  'CERN Open Hardware Licence Version 2 - Permissive' = 'CERN-OHL-P-2.0',

  /**
   * CERN Open Hardware Licence Version 2 - Strongly Reciprocal
   */
  'CERN Open Hardware Licence Version 2 - Strongly Reciprocal' = 'CERN-OHL-S-2.0',

  /**
   * CERN Open Hardware Licence Version 2 - Weakly Reciprocal
   */
  'CERN Open Hardware Licence Version 2 - Weakly Reciprocal' = 'CERN-OHL-W-2.0',

  /**
   * CFITSIO License
   */
  'CFITSIO License' = 'CFITSIO',

  /**
   * Checkmk License
   */
  'Checkmk License' = 'checkmk',

  /**
   * Clarified Artistic License
   */
  'Clarified Artistic License' = 'ClArtistic',

  /**
   * Clips License
   */
  'Clips License' = 'Clips',

  /**
   * CMU Mach License
   */
  'CMU Mach License' = 'CMU-Mach',

  /**
   * CNRI Jython License
   */
  'CNRI Jython License' = 'CNRI-Jython',

  /**
   * CNRI Python License
   */
  'CNRI Python License' = 'CNRI-Python',

  /**
   * CNRI Python Open Source GPL Compatible License Agreement
   */
  'CNRI Python Open Source GPL Compatible License Agreement' = 'CNRI-Python-GPL-Compatible',

  /**
   * Copyfree Open Innovation License
   */
  'Copyfree Open Innovation License' = 'COIL-1.0',

  /**
   * Community Specification License 1.0
   */
  'Community Specification License 1.0' = 'Community-Spec-1.0',

  /**
   * Condor Public License v1.1
   */
  'Condor Public License v1.1' = 'Condor-1.1',

  /**
   * copyleft-next 0.3.0
   */
  'copyleft-next 0.3.0' = 'copyleft-next-0.3.0',

  /**
   * copyleft-next 0.3.1
   */
  'copyleft-next 0.3.1' = 'copyleft-next-0.3.1',

  /**
   * Cornell Lossless JPEG License
   */
  'Cornell Lossless JPEG License' = 'Cornell-Lossless-JPEG',

  /**
   * Common Public Attribution License 1.0
   */
  'Common Public Attribution License 1.0' = 'CPAL-1.0',

  /**
   * Common Public License 1.0
   */
  'Common Public License 1.0' = 'CPL-1.0',

  /**
   * Code Project Open License 1.02
   */
  'Code Project Open License 1.02' = 'CPOL-1.02',

  /**
   * Crossword License
   */
  'Crossword License' = 'Crossword',

  /**
   * CrystalStacker License
   */
  'CrystalStacker License' = 'CrystalStacker',

  /**
   * CUA Office Public License v1.0
   */
  'CUA Office Public License v1.0' = 'CUA-OPL-1.0',

  /**
   * Cube License
   */
  'Cube License' = 'Cube',

  /**
   * curl License
   */
  'curl License' = 'curl',

  /**
   * Deutsche Freie Software Lizenz
   */
  'Deutsche Freie Software Lizenz' = 'D-FSL-1.0',

  /**
   * diffmark license
   */
  'diffmark license' = 'diffmark',

  /**
   * Data licence Germany – attribution – version 2.0
   */
  'Data licence Germany – attribution – version 2.0' = 'DL-DE-BY-2.0',

  /**
   * DOC License
   */
  'DOC License' = 'DOC',

  /**
   * Dotseqn License
   */
  'Dotseqn License' = 'Dotseqn',

  /**
   * Detection Rule License 1.0
   */
  'Detection Rule License 1.0' = 'DRL-1.0',

  /**
   * DSDP License
   */
  'DSDP License' = 'DSDP',

  /**
   * David M. Gay dtoa License
   */
  'David M. Gay dtoa License' = 'dtoa',

  /**
   * dvipdfm License
   */
  'dvipdfm License' = 'dvipdfm',

  /**
   * Educational Community License v1.0
   */
  'Educational Community License v1.0' = 'ECL-1.0',

  /**
   * Educational Community License v2.0
   */
  'Educational Community License v2.0' = 'ECL-2.0',

  /**
   * Eiffel Forum License v1.0
   */
  'Eiffel Forum License v1.0' = 'EFL-1.0',

  /**
   * Eiffel Forum License v2.0
   */
  'Eiffel Forum License v2.0' = 'EFL-2.0',

  /**
   * eGenix.com Public License 1.1.0
   */
  'eGenix.com Public License 1.1.0' = 'eGenix',

  /**
   * Elastic License 2.0
   */
  'Elastic License 2.0' = 'Elastic-2.0',

  /**
   * Entessa Public License v1.0
   */
  'Entessa Public License v1.0' = 'Entessa',

  /**
   * EPICS Open License
   */
  'EPICS Open License' = 'EPICS',

  /**
   * Eclipse Public License 1.0
   */
  'Eclipse Public License 1.0' = 'EPL-1.0',

  /**
   * Eclipse Public License 2.0
   */
  'Eclipse Public License 2.0' = 'EPL-2.0',

  /**
   * Erlang Public License v1.1
   */
  'Erlang Public License v1.1' = 'ErlPL-1.1',

  /**
   * Etalab Open License 2.0
   */
  'Etalab Open License 2.0' = 'etalab-2.0',

  /**
   * EU DataGrid Software License
   */
  'EU DataGrid Software License' = 'EUDatagrid',

  /**
   * European Union Public License 1.0
   */
  'European Union Public License 1.0' = 'EUPL-1.0',

  /**
   * European Union Public License 1.1
   */
  'European Union Public License 1.1' = 'EUPL-1.1',

  /**
   * European Union Public License 1.2
   */
  'European Union Public License 1.2' = 'EUPL-1.2',

  /**
   * Eurosym License
   */
  'Eurosym License' = 'Eurosym',

  /**
   * Fair License
   */
  'Fair License' = 'Fair',

  /**
   * Fraunhofer FDK AAC Codec Library
   */
  'Fraunhofer FDK AAC Codec Library' = 'FDK-AAC',

  /**
   * Frameworx Open License 1.0
   */
  'Frameworx Open License 1.0' = 'Frameworx-1.0',

  /**
   * FreeBSD Documentation License
   */
  'FreeBSD Documentation License' = 'FreeBSD-DOC',

  /**
   * FreeImage Public License v1.0
   */
  'FreeImage Public License v1.0' = 'FreeImage',

  /**
   * FSF All Permissive License
   */
  'FSF All Permissive License' = 'FSFAP',

  /**
   * FSF Unlimited License
   */
  'FSF Unlimited License' = 'FSFUL',

  /**
   * FSF Unlimited License (with License Retention)
   */
  'FSF Unlimited License (with License Retention)' = 'FSFULLR',

  /**
   * FSF Unlimited License (With License Retention and Warranty Disclaimer)
   */
  'FSF Unlimited License (With License Retention and Warranty Disclaimer)' = 'FSFULLRWD',

  /**
   * Freetype Project License
   */
  'Freetype Project License' = 'FTL',

  /**
   * GD License
   */
  'GD License' = 'GD',

  /**
   * GNU Free Documentation License v1.1 only - invariants
   */
  'GNU Free Documentation License v1.1 only - invariants' = 'GFDL-1.1-invariants-only',

  /**
   * GNU Free Documentation License v1.1 or later - invariants
   */
  'GNU Free Documentation License v1.1 or later - invariants' = 'GFDL-1.1-invariants-or-later',

  /**
   * GNU Free Documentation License v1.1 only - no invariants
   */
  'GNU Free Documentation License v1.1 only - no invariants' = 'GFDL-1.1-no-invariants-only',

  /**
   * GNU Free Documentation License v1.1 or later - no invariants
   */
  'GNU Free Documentation License v1.1 or later - no invariants' = 'GFDL-1.1-no-invariants-or-later',

  /**
   * GNU Free Documentation License v1.1 only
   */
  'GNU Free Documentation License v1.1 only' = 'GFDL-1.1-only',

  /**
   * GNU Free Documentation License v1.1 or later
   */
  'GNU Free Documentation License v1.1 or later' = 'GFDL-1.1-or-later',

  /**
   * GNU Free Documentation License v1.2 only - invariants
   */
  'GNU Free Documentation License v1.2 only - invariants' = 'GFDL-1.2-invariants-only',

  /**
   * GNU Free Documentation License v1.2 or later - invariants
   */
  'GNU Free Documentation License v1.2 or later - invariants' = 'GFDL-1.2-invariants-or-later',

  /**
   * GNU Free Documentation License v1.2 only - no invariants
   */
  'GNU Free Documentation License v1.2 only - no invariants' = 'GFDL-1.2-no-invariants-only',

  /**
   * GNU Free Documentation License v1.2 or later - no invariants
   */
  'GNU Free Documentation License v1.2 or later - no invariants' = 'GFDL-1.2-no-invariants-or-later',

  /**
   * GNU Free Documentation License v1.2 only
   */
  'GNU Free Documentation License v1.2 only' = 'GFDL-1.2-only',

  /**
   * GNU Free Documentation License v1.2 or later
   */
  'GNU Free Documentation License v1.2 or later' = 'GFDL-1.2-or-later',

  /**
   * GNU Free Documentation License v1.3 only - invariants
   */
  'GNU Free Documentation License v1.3 only - invariants' = 'GFDL-1.3-invariants-only',

  /**
   * GNU Free Documentation License v1.3 or later - invariants
   */
  'GNU Free Documentation License v1.3 or later - invariants' = 'GFDL-1.3-invariants-or-later',

  /**
   * GNU Free Documentation License v1.3 only - no invariants
   */
  'GNU Free Documentation License v1.3 only - no invariants' = 'GFDL-1.3-no-invariants-only',

  /**
   * GNU Free Documentation License v1.3 or later - no invariants
   */
  'GNU Free Documentation License v1.3 or later - no invariants' = 'GFDL-1.3-no-invariants-or-later',

  /**
   * GNU Free Documentation License v1.3 only
   */
  'GNU Free Documentation License v1.3 only' = 'GFDL-1.3-only',

  /**
   * GNU Free Documentation License v1.3 or later
   */
  'GNU Free Documentation License v1.3 or later' = 'GFDL-1.3-or-later',

  /**
   * Giftware License
   */
  'Giftware License' = 'Giftware',

  /**
   * GL2PS License
   */
  'GL2PS License' = 'GL2PS',

  /**
   * 3dfx Glide License
   */
  '3dfx Glide License' = 'Glide',

  /**
   * Glulxe License
   */
  'Glulxe License' = 'Glulxe',

  /**
   * Good Luck With That Public License
   */
  'Good Luck With That Public License' = 'GLWTPL',

  /**
   * gnuplot License
   */
  'gnuplot License' = 'gnuplot',

  /**
   * GNU General Public License v1.0 only
   */
  'GNU General Public License v1.0 only' = 'GPL-1.0-only',

  /**
   * GNU General Public License v1.0 or later
   */
  'GNU General Public License v1.0 or later' = 'GPL-1.0-or-later',

  /**
   * GNU General Public License v2.0 only
   */
  'GNU General Public License v2.0 only' = 'GPL-2.0-only',

  /**
   * GNU General Public License v2.0 or later
   */
  'GNU General Public License v2.0 or later' = 'GPL-2.0-or-later',

  /**
   * GNU General Public License v3.0 only
   */
  'GNU General Public License v3.0 only' = 'GPL-3.0-only',

  /**
   * GNU General Public License v3.0 or later
   */
  'GNU General Public License v3.0 or later' = 'GPL-3.0-or-later',

  /**
   * Graphics Gems License
   */
  'Graphics Gems License' = 'Graphics-Gems',

  /**
   * gSOAP Public License v1.3b
   */
  'gSOAP Public License v1.3b' = 'gSOAP-1.3b',

  /**
   * Haskell Language Report License
   */
  'Haskell Language Report License' = 'HaskellReport',

  /**
   * Hippocratic License 2.1
   */
  'Hippocratic License 2.1' = 'Hippocratic-2.1',

  /**
   * Hewlett-Packard 1986 License
   */
  'Hewlett-Packard 1986 License' = 'HP-1986',

  /**
   * Historical Permission Notice and Disclaimer
   */
  'Historical Permission Notice and Disclaimer' = 'HPND',

  /**
   * HPND with US Government export control warning
   */
  'HPND with US Government export control warning' = 'HPND-export-US',

  /**
   * Historical Permission Notice and Disclaimer - Markus Kuhn variant
   */
  'Historical Permission Notice and Disclaimer - Markus Kuhn variant' = 'HPND-Markus-Kuhn',

  /**
   * Historical Permission Notice and Disclaimer - sell variant
   */
  'Historical Permission Notice and Disclaimer - sell variant' = 'HPND-sell-variant',

  /**
   * HPND sell variant with MIT disclaimer
   */
  'HPND sell variant with MIT disclaimer' = 'HPND-sell-variant-MIT-disclaimer',

  /**
   * HTML Tidy License
   */
  'HTML Tidy License' = 'HTMLTIDY',

  /**
   * IBM PowerPC Initialization and Boot Software
   */
  'IBM PowerPC Initialization and Boot Software' = 'IBM-pibs',

  /**
   * ICU License
   */
  'ICU License' = 'ICU',

  /**
   * IEC Code Components End-user licence agreement
   */
  'IEC Code Components End-user licence agreement' = 'IEC-Code-Components-EULA',

  /**
   * Independent JPEG Group License
   */
  'Independent JPEG Group License' = 'IJG',

  /**
   * Independent JPEG Group License - short
   */
  'Independent JPEG Group License - short' = 'IJG-short',

  /**
   * ImageMagick License
   */
  'ImageMagick License' = 'ImageMagick',

  /**
   * iMatix Standard Function Library Agreement
   */
  'iMatix Standard Function Library Agreement' = 'iMatix',

  /**
   * Imlib2 License
   */
  'Imlib2 License' = 'Imlib2',

  /**
   * Info-ZIP License
   */
  'Info-ZIP License' = 'Info-ZIP',

  /**
   * Inner Net License v2.0
   */
  'Inner Net License v2.0' = 'Inner-Net-2.0',

  /**
   * Intel Open Source License
   */
  'Intel Open Source License' = 'Intel',

  /**
   * Intel ACPI Software License Agreement
   */
  'Intel ACPI Software License Agreement' = 'Intel-ACPI',

  /**
   * Interbase Public License v1.0
   */
  'Interbase Public License v1.0' = 'Interbase-1.0',

  /**
   * IPA Font License
   */
  'IPA Font License' = 'IPA',

  /**
   * IBM Public License v1.0
   */
  'IBM Public License v1.0' = 'IPL-1.0',

  /**
   * ISC License
   */
  'ISC License' = 'ISC',

  /**
   * Jam License
   */
  'Jam License' = 'Jam',

  /**
   * JasPer License
   */
  'JasPer License' = 'JasPer-2.0',

  /**
   * JPL Image Use Policy
   */
  'JPL Image Use Policy' = 'JPL-image',

  /**
   * Japan Network Information Center License
   */
  'Japan Network Information Center License' = 'JPNIC',

  /**
   * JSON License
   */
  'JSON License' = 'JSON',

  /**
   * Kazlib License
   */
  'Kazlib License' = 'Kazlib',

  /**
   * Knuth CTAN License
   */
  'Knuth CTAN License' = 'Knuth-CTAN',

  /**
   * Licence Art Libre 1.2
   */
  'Licence Art Libre 1.2' = 'LAL-1.2',

  /**
   * Licence Art Libre 1.3
   */
  'Licence Art Libre 1.3' = 'LAL-1.3',

  /**
   * Latex2e License
   */
  'Latex2e License' = 'Latex2e',

  /**
   * Latex2e with translated notice permission
   */
  'Latex2e with translated notice permission' = 'Latex2e-translated-notice',

  /**
   * Leptonica License
   */
  'Leptonica License' = 'Leptonica',

  /**
   * GNU Library General Public License v2 only
   */
  'GNU Library General Public License v2 only' = 'LGPL-2.0-only',

  /**
   * GNU Library General Public License v2 or later
   */
  'GNU Library General Public License v2 or later' = 'LGPL-2.0-or-later',

  /**
   * GNU Lesser General Public License v2.1 only
   */
  'GNU Lesser General Public License v2.1 only' = 'LGPL-2.1-only',

  /**
   * GNU Lesser General Public License v2.1 or later
   */
  'GNU Lesser General Public License v2.1 or later' = 'LGPL-2.1-or-later',

  /**
   * GNU Lesser General Public License v3.0 only
   */
  'GNU Lesser General Public License v3.0 only' = 'LGPL-3.0-only',

  /**
   * GNU Lesser General Public License v3.0 or later
   */
  'GNU Lesser General Public License v3.0 or later' = 'LGPL-3.0-or-later',

  /**
   * Lesser General Public License For Linguistic Resources
   */
  'Lesser General Public License For Linguistic Resources' = 'LGPLLR',

  /**
   * libpng License
   */
  'libpng License' = 'Libpng',

  /**
   * PNG Reference Library version 2
   */
  'PNG Reference Library version 2' = 'libpng-2.0',

  /**
   * libselinux public domain notice
   */
  'libselinux public domain notice' = 'libselinux-1.0',

  /**
   * libtiff License
   */
  'libtiff License' = 'libtiff',

  /**
   * libutil David Nugent License
   */
  'libutil David Nugent License' = 'libutil-David-Nugent',

  /**
   * Licence Libre du Québec – Permissive version 1.1
   */
  'Licence Libre du Québec – Permissive version 1.1' = 'LiLiQ-P-1.1',

  /**
   * Licence Libre du Québec – Réciprocité version 1.1
   */
  'Licence Libre du Québec – Réciprocité version 1.1' = 'LiLiQ-R-1.1',

  /**
   * Licence Libre du Québec – Réciprocité forte version 1.1
   */
  'Licence Libre du Québec – Réciprocité forte version 1.1' = 'LiLiQ-Rplus-1.1',

  /**
   * Linux man-pages - 1 paragraph
   */
  'Linux man-pages - 1 paragraph' = 'Linux-man-pages-1-para',

  /**
   * Linux man-pages Copyleft
   */
  'Linux man-pages Copyleft' = 'Linux-man-pages-copyleft',

  /**
   * Linux man-pages Copyleft - 2 paragraphs
   */
  'Linux man-pages Copyleft - 2 paragraphs' = 'Linux-man-pages-copyleft-2-para',

  /**
   * Linux man-pages Copyleft Variant
   */
  'Linux man-pages Copyleft Variant' = 'Linux-man-pages-copyleft-var',

  /**
   * Linux Kernel Variant of OpenIB.org license
   */
  'Linux Kernel Variant of OpenIB.org license' = 'Linux-OpenIB',

  /**
   * Common Lisp LOOP License
   */
  'Common Lisp LOOP License' = 'LOOP',

  /**
   * Lucent Public License Version 1.0
   */
  'Lucent Public License Version 1.0' = 'LPL-1.0',

  /**
   * Lucent Public License v1.02
   */
  'Lucent Public License v1.02' = 'LPL-1.02',

  /**
   * LaTeX Project Public License v1.0
   */
  'LaTeX Project Public License v1.0' = 'LPPL-1.0',

  /**
   * LaTeX Project Public License v1.1
   */
  'LaTeX Project Public License v1.1' = 'LPPL-1.1',

  /**
   * LaTeX Project Public License v1.2
   */
  'LaTeX Project Public License v1.2' = 'LPPL-1.2',

  /**
   * LaTeX Project Public License v1.3a
   */
  'LaTeX Project Public License v1.3a' = 'LPPL-1.3a',

  /**
   * LaTeX Project Public License v1.3c
   */
  'LaTeX Project Public License v1.3c' = 'LPPL-1.3c',

  /**
   * LZMA SDK License (versions 9.11 to 9.20)
   */
  'LZMA SDK License (versions 9.11 to 9.20)' = 'LZMA-SDK-9.11-to-9.20',

  /**
   * LZMA SDK License (versions 9.22 and beyond)
   */
  'LZMA SDK License (versions 9.22 and beyond)' = 'LZMA-SDK-9.22',

  /**
   * MakeIndex License
   */
  'MakeIndex License' = 'MakeIndex',

  /**
   * Martin Birgmeier License
   */
  'Martin Birgmeier License' = 'Martin-Birgmeier',

  /**
   * metamail License
   */
  'metamail License' = 'metamail',

  /**
   * Minpack License
   */
  'Minpack License' = 'Minpack',

  /**
   * The MirOS Licence
   */
  'The MirOS Licence' = 'MirOS',

  /**
   * MIT License
   */
  'MIT License' = 'MIT',

  /**
   * MIT No Attribution
   */
  'MIT No Attribution' = 'MIT-0',

  /**
   * Enlightenment License (e16)
   */
  'Enlightenment License (e16)' = 'MIT-advertising',

  /**
   * CMU License
   */
  'CMU License' = 'MIT-CMU',

  /**
   * enna License
   */
  'enna License' = 'MIT-enna',

  /**
   * feh License
   */
  'feh License' = 'MIT-feh',

  /**
   * MIT Festival Variant
   */
  'MIT Festival Variant' = 'MIT-Festival',

  /**
   * MIT License Modern Variant
   */
  'MIT License Modern Variant' = 'MIT-Modern-Variant',

  /**
   * MIT Open Group variant
   */
  'MIT Open Group variant' = 'MIT-open-group',

  /**
   * MIT Tom Wu Variant
   */
  'MIT Tom Wu Variant' = 'MIT-Wu',

  /**
   * MIT +no-false-attribs license
   */
  'MIT +no-false-attribs license' = 'MITNFA',

  /**
   * Motosoto License
   */
  'Motosoto License' = 'Motosoto',

  /**
   * mpi Permissive License
   */
  'mpi Permissive License' = 'mpi-permissive',

  /**
   * mpich2 License
   */
  'mpich2 License' = 'mpich2',

  /**
   * Mozilla Public License 1.0
   */
  'Mozilla Public License 1.0' = 'MPL-1.0',

  /**
   * Mozilla Public License 1.1
   */
  'Mozilla Public License 1.1' = 'MPL-1.1',

  /**
   * Mozilla Public License 2.0
   */
  'Mozilla Public License 2.0' = 'MPL-2.0',

  /**
   * Mozilla Public License 2.0 (no copyleft exception)
   */
  'Mozilla Public License 2.0 (no copyleft exception)' = 'MPL-2.0-no-copyleft-exception',

  /**
   * mplus Font License
   */
  'mplus Font License' = 'mplus',

  /**
   * Microsoft Limited Public License
   */
  'Microsoft Limited Public License' = 'MS-LPL',

  /**
   * Microsoft Public License
   */
  'Microsoft Public License' = 'MS-PL',

  /**
   * Microsoft Reciprocal License
   */
  'Microsoft Reciprocal License' = 'MS-RL',

  /**
   * Matrix Template Library License
   */
  'Matrix Template Library License' = 'MTLL',

  /**
   * Mulan Permissive Software License, Version 1
   */
  'Mulan Permissive Software License, Version 1' = 'MulanPSL-1.0',

  /**
   * Mulan Permissive Software License, Version 2
   */
  'Mulan Permissive Software License, Version 2' = 'MulanPSL-2.0',

  /**
   * Multics License
   */
  'Multics License' = 'Multics',

  /**
   * Mup License
   */
  'Mup License' = 'Mup',

  /**
   * Nara Institute of Science and Technology License (2003)
   */
  'Nara Institute of Science and Technology License (2003)' = 'NAIST-2003',

  /**
   * NASA Open Source Agreement 1.3
   */
  'NASA Open Source Agreement 1.3' = 'NASA-1.3',

  /**
   * Naumen Public License
   */
  'Naumen Public License' = 'Naumen',

  /**
   * Net Boolean Public License v1
   */
  'Net Boolean Public License v1' = 'NBPL-1.0',

  /**
   * Non-Commercial Government Licence
   */
  'Non-Commercial Government Licence' = 'NCGL-UK-2.0',

  /**
   * University of Illinois/NCSA Open Source License
   */
  'University of Illinois/NCSA Open Source License' = 'NCSA',

  /**
   * Net-SNMP License
   */
  'Net-SNMP License' = 'Net-SNMP',

  /**
   * NetCDF license
   */
  'NetCDF license' = 'NetCDF',

  /**
   * Newsletr License
   */
  'Newsletr License' = 'Newsletr',

  /**
   * Nethack General Public License
   */
  'Nethack General Public License' = 'NGPL',

  /**
   * NICTA Public Software License, Version 1.0
   */
  'NICTA Public Software License, Version 1.0' = 'NICTA-1.0',

  /**
   * NIST Public Domain Notice
   */
  'NIST Public Domain Notice' = 'NIST-PD',

  /**
   * NIST Public Domain Notice with license fallback
   */
  'NIST Public Domain Notice with license fallback' = 'NIST-PD-fallback',

  /**
   * NIST Software License
   */
  'NIST Software License' = 'NIST-Software',

  /**
   * Norwegian Licence for Open Government Data (NLOD) 1.0
   */
  'Norwegian Licence for Open Government Data (NLOD) 1.0' = 'NLOD-1.0',

  /**
   * Norwegian Licence for Open Government Data (NLOD) 2.0
   */
  'Norwegian Licence for Open Government Data (NLOD) 2.0' = 'NLOD-2.0',

  /**
   * No Limit Public License
   */
  'No Limit Public License' = 'NLPL',

  /**
   * Nokia Open Source License
   */
  'Nokia Open Source License' = 'Nokia',

  /**
   * Netizen Open Source License
   */
  'Netizen Open Source License' = 'NOSL',

  /**
   * Noweb License
   */
  'Noweb License' = 'Noweb',

  /**
   * Netscape Public License v1.0
   */
  'Netscape Public License v1.0' = 'NPL-1.0',

  /**
   * Netscape Public License v1.1
   */
  'Netscape Public License v1.1' = 'NPL-1.1',

  /**
   * Non-Profit Open Software License 3.0
   */
  'Non-Profit Open Software License 3.0' = 'NPOSL-3.0',

  /**
   * NRL License
   */
  'NRL License' = 'NRL',

  /**
   * NTP License
   */
  'NTP License' = 'NTP',

  /**
   * NTP No Attribution
   */
  'NTP No Attribution' = 'NTP-0',

  /**
   * Open Use of Data Agreement v1.0
   */
  'Open Use of Data Agreement v1.0' = 'O-UDA-1.0',

  /**
   * Open CASCADE Technology Public License
   */
  'Open CASCADE Technology Public License' = 'OCCT-PL',

  /**
   * OCLC Research Public License 2.0
   */
  'OCLC Research Public License 2.0' = 'OCLC-2.0',

  /**
   * Open Data Commons Open Database License v1.0
   */
  'Open Data Commons Open Database License v1.0' = 'ODbL-1.0',

  /**
   * Open Data Commons Attribution License v1.0
   */
  'Open Data Commons Attribution License v1.0' = 'ODC-By-1.0',

  /**
   * OFFIS License
   */
  'OFFIS License' = 'OFFIS',

  /**
   * SIL Open Font License 1.0
   */
  'SIL Open Font License 1.0' = 'OFL-1.0',

  /**
   * SIL Open Font License 1.0 with no Reserved Font Name
   */
  'SIL Open Font License 1.0 with no Reserved Font Name' = 'OFL-1.0-no-RFN',

  /**
   * SIL Open Font License 1.0 with Reserved Font Name
   */
  'SIL Open Font License 1.0 with Reserved Font Name' = 'OFL-1.0-RFN',

  /**
   * SIL Open Font License 1.1
   */
  'SIL Open Font License 1.1' = 'OFL-1.1',

  /**
   * SIL Open Font License 1.1 with no Reserved Font Name
   */
  'SIL Open Font License 1.1 with no Reserved Font Name' = 'OFL-1.1-no-RFN',

  /**
   * SIL Open Font License 1.1 with Reserved Font Name
   */
  'SIL Open Font License 1.1 with Reserved Font Name' = 'OFL-1.1-RFN',

  /**
   * OGC Software License, Version 1.0
   */
  'OGC Software License, Version 1.0' = 'OGC-1.0',

  /**
   * Taiwan Open Government Data License, version 1.0
   */
  'Taiwan Open Government Data License, version 1.0' = 'OGDL-Taiwan-1.0',

  /**
   * Open Government Licence - Canada
   */
  'Open Government Licence - Canada' = 'OGL-Canada-2.0',

  /**
   * Open Government Licence v1.0
   */
  'Open Government Licence v1.0' = 'OGL-UK-1.0',

  /**
   * Open Government Licence v2.0
   */
  'Open Government Licence v2.0' = 'OGL-UK-2.0',

  /**
   * Open Government Licence v3.0
   */
  'Open Government Licence v3.0' = 'OGL-UK-3.0',

  /**
   * Open Group Test Suite License
   */
  'Open Group Test Suite License' = 'OGTSL',

  /**
   * Open LDAP Public License v1.1
   */
  'Open LDAP Public License v1.1' = 'OLDAP-1.1',

  /**
   * Open LDAP Public License v1.2
   */
  'Open LDAP Public License v1.2' = 'OLDAP-1.2',

  /**
   * Open LDAP Public License v1.3
   */
  'Open LDAP Public License v1.3' = 'OLDAP-1.3',

  /**
   * Open LDAP Public License v1.4
   */
  'Open LDAP Public License v1.4' = 'OLDAP-1.4',

  /**
   * Open LDAP Public License v2.0 (or possibly 2.0A and 2.0B)
   */
  'Open LDAP Public License v2.0 (or possibly 2.0A and 2.0B)' = 'OLDAP-2.0',

  /**
   * Open LDAP Public License v2.0.1
   */
  'Open LDAP Public License v2.0.1' = 'OLDAP-2.0.1',

  /**
   * Open LDAP Public License v2.1
   */
  'Open LDAP Public License v2.1' = 'OLDAP-2.1',

  /**
   * Open LDAP Public License v2.2
   */
  'Open LDAP Public License v2.2' = 'OLDAP-2.2',

  /**
   * Open LDAP Public License v2.2.1
   */
  'Open LDAP Public License v2.2.1' = 'OLDAP-2.2.1',

  /**
   * Open LDAP Public License 2.2.2
   */
  'Open LDAP Public License 2.2.2' = 'OLDAP-2.2.2',

  /**
   * Open LDAP Public License v2.3
   */
  'Open LDAP Public License v2.3' = 'OLDAP-2.3',

  /**
   * Open LDAP Public License v2.4
   */
  'Open LDAP Public License v2.4' = 'OLDAP-2.4',

  /**
   * Open LDAP Public License v2.5
   */
  'Open LDAP Public License v2.5' = 'OLDAP-2.5',

  /**
   * Open LDAP Public License v2.6
   */
  'Open LDAP Public License v2.6' = 'OLDAP-2.6',

  /**
   * Open LDAP Public License v2.7
   */
  'Open LDAP Public License v2.7' = 'OLDAP-2.7',

  /**
   * Open LDAP Public License v2.8
   */
  'Open LDAP Public License v2.8' = 'OLDAP-2.8',

  /**
   * Open Logistics Foundation License Version 1.3
   */
  'Open Logistics Foundation License Version 1.3' = 'OLFL-1.3',

  /**
   * Open Market License
   */
  'Open Market License' = 'OML',

  /**
   * OpenPBS v2.3 Software License
   */
  'OpenPBS v2.3 Software License' = 'OpenPBS-2.3',

  /**
   * OpenSSL License
   */
  'OpenSSL License' = 'OpenSSL',

  /**
   * Open Public License v1.0
   */
  'Open Public License v1.0' = 'OPL-1.0',

  /**
   * United Kingdom Open Parliament Licence v3.0
   */
  'United Kingdom Open Parliament Licence v3.0' = 'OPL-UK-3.0',

  /**
   * Open Publication License v1.0
   */
  'Open Publication License v1.0' = 'OPUBL-1.0',

  /**
   * OSET Public License version 2.1
   */
  'OSET Public License version 2.1' = 'OSET-PL-2.1',

  /**
   * Open Software License 1.0
   */
  'Open Software License 1.0' = 'OSL-1.0',

  /**
   * Open Software License 1.1
   */
  'Open Software License 1.1' = 'OSL-1.1',

  /**
   * Open Software License 2.0
   */
  'Open Software License 2.0' = 'OSL-2.0',

  /**
   * Open Software License 2.1
   */
  'Open Software License 2.1' = 'OSL-2.1',

  /**
   * Open Software License 3.0
   */
  'Open Software License 3.0' = 'OSL-3.0',

  /**
   * The Parity Public License 6.0.0
   */
  'The Parity Public License 6.0.0' = 'Parity-6.0.0',

  /**
   * The Parity Public License 7.0.0
   */
  'The Parity Public License 7.0.0' = 'Parity-7.0.0',

  /**
   * Open Data Commons Public Domain Dedication & License 1.0
   */
  'Open Data Commons Public Domain Dedication & License 1.0' = 'PDDL-1.0',

  /**
   * PHP License v3.0
   */
  'PHP License v3.0' = 'PHP-3.0',

  /**
   * PHP License v3.01
   */
  'PHP License v3.01' = 'PHP-3.01',

  /**
   * Plexus Classworlds License
   */
  'Plexus Classworlds License' = 'Plexus',

  /**
   * PolyForm Noncommercial License 1.0.0
   */
  'PolyForm Noncommercial License 1.0.0' = 'PolyForm-Noncommercial-1.0.0',

  /**
   * PolyForm Small Business License 1.0.0
   */
  'PolyForm Small Business License 1.0.0' = 'PolyForm-Small-Business-1.0.0',

  /**
   * PostgreSQL License
   */
  'PostgreSQL License' = 'PostgreSQL',

  /**
   * Python Software Foundation License 2.0
   */
  'Python Software Foundation License 2.0' = 'PSF-2.0',

  /**
   * psfrag License
   */
  'psfrag License' = 'psfrag',

  /**
   * psutils License
   */
  'psutils License' = 'psutils',

  /**
   * Python License 2.0
   */
  'Python License 2.0' = 'Python-2.0',

  /**
   * Python License 2.0.1
   */
  'Python License 2.0.1' = 'Python-2.0.1',

  /**
   * Qhull License
   */
  'Qhull License' = 'Qhull',

  /**
   * Q Public License 1.0
   */
  'Q Public License 1.0' = 'QPL-1.0',

  /**
   * Q Public License 1.0 - INRIA 2004 variant
   */
  'Q Public License 1.0 - INRIA 2004 variant' = 'QPL-1.0-INRIA-2004',

  /**
   * Rdisc License
   */
  'Rdisc License' = 'Rdisc',

  /**
   * Red Hat eCos Public License v1.1
   */
  'Red Hat eCos Public License v1.1' = 'RHeCos-1.1',

  /**
   * Reciprocal Public License 1.1
   */
  'Reciprocal Public License 1.1' = 'RPL-1.1',

  /**
   * Reciprocal Public License 1.5
   */
  'Reciprocal Public License 1.5' = 'RPL-1.5',

  /**
   * RealNetworks Public Source License v1.0
   */
  'RealNetworks Public Source License v1.0' = 'RPSL-1.0',

  /**
   * RSA Message-Digest License
   */
  'RSA Message-Digest License' = 'RSA-MD',

  /**
   * Ricoh Source Code Public License
   */
  'Ricoh Source Code Public License' = 'RSCPL',

  /**
   * Ruby License
   */
  'Ruby License' = 'Ruby',

  /**
   * Sax Public Domain Notice
   */
  'Sax Public Domain Notice' = 'SAX-PD',

  /**
   * Saxpath License
   */
  'Saxpath License' = 'Saxpath',

  /**
   * SCEA Shared Source License
   */
  'SCEA Shared Source License' = 'SCEA',

  /**
   * Scheme Language Report License
   */
  'Scheme Language Report License' = 'SchemeReport',

  /**
   * Sendmail License
   */
  'Sendmail License' = 'Sendmail',

  /**
   * Sendmail License 8.23
   */
  'Sendmail License 8.23' = 'Sendmail-8.23',

  /**
   * SGI Free Software License B v1.0
   */
  'SGI Free Software License B v1.0' = 'SGI-B-1.0',

  /**
   * SGI Free Software License B v1.1
   */
  'SGI Free Software License B v1.1' = 'SGI-B-1.1',

  /**
   * SGI Free Software License B v2.0
   */
  'SGI Free Software License B v2.0' = 'SGI-B-2.0',

  /**
   * SGP4 Permission Notice
   */
  'SGP4 Permission Notice' = 'SGP4',

  /**
   * Solderpad Hardware License v0.5
   */
  'Solderpad Hardware License v0.5' = 'SHL-0.5',

  /**
   * Solderpad Hardware License, Version 0.51
   */
  'Solderpad Hardware License, Version 0.51' = 'SHL-0.51',

  /**
   * Simple Public License 2.0
   */
  'Simple Public License 2.0' = 'SimPL-2.0',

  /**
   * Sun Industry Standards Source License v1.1
   */
  'Sun Industry Standards Source License v1.1' = 'SISSL',

  /**
   * Sun Industry Standards Source License v1.2
   */
  'Sun Industry Standards Source License v1.2' = 'SISSL-1.2',

  /**
   * Sleepycat License
   */
  'Sleepycat License' = 'Sleepycat',

  /**
   * Standard ML of New Jersey License
   */
  'Standard ML of New Jersey License' = 'SMLNJ',

  /**
   * Secure Messaging Protocol Public License
   */
  'Secure Messaging Protocol Public License' = 'SMPPL',

  /**
   * SNIA Public License 1.1
   */
  'SNIA Public License 1.1' = 'SNIA',

  /**
   * snprintf License
   */
  'snprintf License' = 'snprintf',

  /**
   * Spencer License 86
   */
  'Spencer License 86' = 'Spencer-86',

  /**
   * Spencer License 94
   */
  'Spencer License 94' = 'Spencer-94',

  /**
   * Spencer License 99
   */
  'Spencer License 99' = 'Spencer-99',

  /**
   * Sun Public License v1.0
   */
  'Sun Public License v1.0' = 'SPL-1.0',

  /**
   * SSH OpenSSH license
   */
  'SSH OpenSSH license' = 'SSH-OpenSSH',

  /**
   * SSH short notice
   */
  'SSH short notice' = 'SSH-short',

  /**
   * Server Side Public License, v 1
   */
  'Server Side Public License, v 1' = 'SSPL-1.0',

  /**
   * SugarCRM Public License v1.1.3
   */
  'SugarCRM Public License v1.1.3' = 'SugarCRM-1.1.3',

  /**
   * SunPro License
   */
  'SunPro License' = 'SunPro',

  /**
   * Scheme Widget Library (SWL) Software License Agreement
   */
  'Scheme Widget Library (SWL) Software License Agreement' = 'SWL',

  /**
   * Symlinks License
   */
  'Symlinks License' = 'Symlinks',

  /**
   * TAPR Open Hardware License v1.0
   */
  'TAPR Open Hardware License v1.0' = 'TAPR-OHL-1.0',

  /**
   * TCL/TK License
   */
  'TCL/TK License' = 'TCL',

  /**
   * TCP Wrappers License
   */
  'TCP Wrappers License' = 'TCP-wrappers',

  /**
   * TermReadKey License
   */
  'TermReadKey License' = 'TermReadKey',

  /**
   * TMate Open Source License
   */
  'TMate Open Source License' = 'TMate',

  /**
   * TORQUE v2.5+ Software License v1.1
   */
  'TORQUE v2.5+ Software License v1.1' = 'TORQUE-1.1',

  /**
   * Trusster Open Source License
   */
  'Trusster Open Source License' = 'TOSL',

  /**
   * Time::ParseDate License
   */
  'Time::ParseDate License' = 'TPDL',

  /**
   * THOR Public License 1.0
   */
  'THOR Public License 1.0' = 'TPL-1.0',

  /**
   * Text-Tabs+Wrap License
   */
  'Text-Tabs+Wrap License' = 'TTWL',

  /**
   * Technische Universitaet Berlin License 1.0
   */
  'Technische Universitaet Berlin License 1.0' = 'TU-Berlin-1.0',

  /**
   * Technische Universitaet Berlin License 2.0
   */
  'Technische Universitaet Berlin License 2.0' = 'TU-Berlin-2.0',

  /**
   * UCAR License
   */
  'UCAR License' = 'UCAR',

  /**
   * Upstream Compatibility License v1.0
   */
  'Upstream Compatibility License v1.0' = 'UCL-1.0',

  /**
   * Unicode License Agreement - Data Files and Software (2015)
   */
  'Unicode License Agreement - Data Files and Software (2015)' = 'Unicode-DFS-2015',

  /**
   * Unicode License Agreement - Data Files and Software (2016)
   */
  'Unicode License Agreement - Data Files and Software (2016)' = 'Unicode-DFS-2016',

  /**
   * Unicode Terms of Use
   */
  'Unicode Terms of Use' = 'Unicode-TOU',

  /**
   * UnixCrypt License
   */
  'UnixCrypt License' = 'UnixCrypt',

  /**
   * The Unlicense
   */
  'The Unlicense' = 'Unlicense',

  /**
   * Universal Permissive License v1.0
   */
  'Universal Permissive License v1.0' = 'UPL-1.0',

  /**
   * Vim License
   */
  'Vim License' = 'Vim',

  /**
   * VOSTROM Public License for Open Source
   */
  'VOSTROM Public License for Open Source' = 'VOSTROM',

  /**
   * Vovida Software License v1.0
   */
  'Vovida Software License v1.0' = 'VSL-1.0',

  /**
   * W3C Software Notice and License (2002-12-31)
   */
  'W3C Software Notice and License (2002-12-31)' = 'W3C',

  /**
   * W3C Software Notice and License (1998-07-20)
   */
  'W3C Software Notice and License (1998-07-20)' = 'W3C-19980720',

  /**
   * W3C Software Notice and Document License (2015-05-13)
   */
  'W3C Software Notice and Document License (2015-05-13)' = 'W3C-20150513',

  /**
   * w3m License
   */
  'w3m License' = 'w3m',

  /**
   * Sybase Open Watcom Public License 1.0
   */
  'Sybase Open Watcom Public License 1.0' = 'Watcom-1.0',

  /**
   * Widget Workshop License
   */
  'Widget Workshop License' = 'Widget-Workshop',

  /**
   * Wsuipa License
   */
  'Wsuipa License' = 'Wsuipa',

  /**
   * Do What The F*ck You Want To Public License
   */
  'Do What The F*ck You Want To Public License' = 'WTFPL',

  /**
   * X11 License
   */
  'X11 License' = 'X11',

  /**
   * X11 License Distribution Modification Variant
   */
  'X11 License Distribution Modification Variant' = 'X11-distribute-modifications-variant',

  /**
   * Xdebug License v 1.03
   */
  'Xdebug License v 1.03' = 'Xdebug-1.03',

  /**
   * Xerox License
   */
  'Xerox License' = 'Xerox',

  /**
   * Xfig License
   */
  'Xfig License' = 'Xfig',

  /**
   * XFree86 License 1.1
   */
  'XFree86 License 1.1' = 'XFree86-1.1',

  /**
   * xinetd License
   */
  'xinetd License' = 'xinetd',

  /**
   * xlock License
   */
  'xlock License' = 'xlock',

  /**
   * X.Net License
   */
  'X.Net License' = 'Xnet',

  /**
   * XPP License
   */
  'XPP License' = 'xpp',

  /**
   * XSkat License
   */
  'XSkat License' = 'XSkat',

  /**
   * Yahoo! Public License v1.0
   */
  'Yahoo! Public License v1.0' = 'YPL-1.0',

  /**
   * Yahoo! Public License v1.1
   */
  'Yahoo! Public License v1.1' = 'YPL-1.1',

  /**
   * Zed License
   */
  'Zed License' = 'Zed',

  /**
   * Zend License v2.0
   */
  'Zend License v2.0' = 'Zend-2.0',

  /**
   * Zimbra Public License v1.3
   */
  'Zimbra Public License v1.3' = 'Zimbra-1.3',

  /**
   * Zimbra Public License v1.4
   */
  'Zimbra Public License v1.4' = 'Zimbra-1.4',

  /**
   * zlib License
   */
  'zlib License' = 'Zlib',

  /**
   * zlib/libpng License with Acknowledgement
   */
  'zlib/libpng License with Acknowledgement' = 'zlib-acknowledgement',

  /**
   * Zope Public License 1.1
   */
  'Zope Public License 1.1' = 'ZPL-1.1',

  /**
   * Zope Public License 2.0
   */
  'Zope Public License 2.0' = 'ZPL-2.0',

  /**
   * Zope Public License 2.1
   */
  'Zope Public License 2.1' = 'ZPL-2.1',
}
