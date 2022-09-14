import * as _153 from "./claims/v1/claims";
import * as _154 from "./claims/v1/genesis";
import * as _155 from "./claims/v1/query";
import * as _156 from "./epochs/v1/genesis";
import * as _157 from "./epochs/v1/query";
import * as _158 from "./erc20/v1/erc20";
import * as _159 from "./erc20/v1/genesis";
import * as _160 from "./erc20/v1/query";
import * as _161 from "./erc20/v1/tx";
import * as _162 from "./fees/v1/fees";
import * as _163 from "./fees/v1/genesis";
import * as _164 from "./fees/v1/query";
import * as _165 from "./fees/v1/tx";
import * as _166 from "./incentives/v1/genesis";
import * as _167 from "./incentives/v1/incentives";
import * as _168 from "./incentives/v1/query";
import * as _169 from "./inflation/v1/genesis";
import * as _170 from "./inflation/v1/inflation";
import * as _171 from "./inflation/v1/query";
import * as _172 from "./recovery/v1/genesis";
import * as _173 from "./recovery/v1/query";
import * as _174 from "./vesting/v1/query";
import * as _175 from "./vesting/v1/tx";
import * as _176 from "./vesting/v1/vesting";
import * as _429 from "./erc20/v1/tx.amino";
import * as _430 from "./fees/v1/tx.amino";
import * as _431 from "./vesting/v1/tx.amino";
import * as _432 from "./erc20/v1/tx.registry";
import * as _433 from "./fees/v1/tx.registry";
import * as _434 from "./vesting/v1/tx.registry";
import * as _435 from "./claims/v1/query.lcd";
import * as _436 from "./epochs/v1/query.lcd";
import * as _437 from "./erc20/v1/query.lcd";
import * as _438 from "./fees/v1/query.lcd";
import * as _439 from "./incentives/v1/query.lcd";
import * as _440 from "./inflation/v1/query.lcd";
import * as _441 from "./recovery/v1/query.lcd";
import * as _442 from "./vesting/v1/query.lcd";
import * as _443 from "./claims/v1/query.rpc.query";
import * as _444 from "./epochs/v1/query.rpc.query";
import * as _445 from "./erc20/v1/query.rpc.query";
import * as _446 from "./fees/v1/query.rpc.query";
import * as _447 from "./incentives/v1/query.rpc.query";
import * as _448 from "./inflation/v1/query.rpc.query";
import * as _449 from "./recovery/v1/query.rpc.query";
import * as _450 from "./vesting/v1/query.rpc.query";
import * as _451 from "./erc20/v1/tx.rpc.msg";
import * as _452 from "./fees/v1/tx.rpc.msg";
import * as _453 from "./vesting/v1/tx.rpc.msg";
import * as _527 from "./lcd";
import * as _528 from "./custom-lcd-client";
import * as _529 from "./rpc.query";
import * as _530 from "./evmos-rpc-client.query";
import * as _531 from "./rpc.tx";
import * as _532 from "./evmos-rpc-client.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = { ..._153,
      ..._154,
      ..._155,
      ..._435,
      ..._443
    };
  }
  export namespace epochs {
    export const v1 = { ..._156,
      ..._157,
      ..._436,
      ..._444
    };
  }
  export namespace erc20 {
    export const v1 = { ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._429,
      ..._432,
      ..._437,
      ..._445,
      ..._451
    };
  }
  export namespace fees {
    export const v1 = { ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._430,
      ..._433,
      ..._438,
      ..._446,
      ..._452
    };
  }
  export namespace incentives {
    export const v1 = { ..._166,
      ..._167,
      ..._168,
      ..._439,
      ..._447
    };
  }
  export namespace inflation {
    export const v1 = { ..._169,
      ..._170,
      ..._171,
      ..._440,
      ..._448
    };
  }
  export namespace recovery {
    export const v1 = { ..._172,
      ..._173,
      ..._441,
      ..._449
    };
  }
  export namespace vesting {
    export const v1 = { ..._174,
      ..._175,
      ..._176,
      ..._431,
      ..._434,
      ..._442,
      ..._450,
      ..._453
    };
  }
  export const ClientFactory = { ..._527,
    ..._528,
    ..._529,
    ..._530,
    ..._531,
    ..._532
  };
}