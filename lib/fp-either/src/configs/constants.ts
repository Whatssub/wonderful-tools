/**
 * ### 'Either' type constants
 *
 * Collections of type tag definitions
 */
export const EITHER_CONSTANT = {
  /**
   * ### [type/left] Left type string
   *
   * Type string that has left value
   */
  TYPE_LEFT: 'left',

  /**
   * ### [type/right] Right type string
   *
   * Type string that has right value
   */
  TYPE_RIGHT: 'right',

  /**
   * ### [type/both] Both type string
   *
   * Type string that has left and right value
   */
  TYPE_BOTH: 'both',
} satisfies Record<string, string>;
