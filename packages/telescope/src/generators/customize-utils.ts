import { TelescopeBuilder } from '../builder';
import { UTILS } from '../utils';

export const plugin = (builder: TelescopeBuilder) => {
  if (
    builder.options.prototypes.typingsFormat.customTypes.usePatchedDecimal ===
    true
  ) {
    UTILS.Decimal = '__decimals__';
  } else {
    UTILS.Decimal = '@cosmjs/math';
  }
};
