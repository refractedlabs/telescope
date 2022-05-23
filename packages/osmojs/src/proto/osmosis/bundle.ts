import * as _177 from "./claim/v1beta1/claim";
import * as _178 from "./claim/v1beta1/genesis";
import * as _179 from "./claim/v1beta1/params";
import * as _180 from "./claim/v1beta1/query";
import * as _181 from "./epochs/genesis";
import * as _182 from "./epochs/query";
import * as _183 from "./gamm/pool-models/balancer/balancerPool";
import * as _184 from "./gamm/pool-models/balancer/tx";
import * as _185 from "./gamm/v1beta1/genesis";
import * as _186 from "./gamm/v1beta1/query";
import * as _187 from "./gamm/v1beta1/tx";
import * as _188 from "./incentives/gauge";
import * as _189 from "./incentives/genesis";
import * as _190 from "./incentives/params";
import * as _191 from "./incentives/query";
import * as _192 from "./incentives/tx";
import * as _193 from "./lockup/genesis";
import * as _194 from "./lockup/lock";
import * as _195 from "./lockup/query";
import * as _196 from "./lockup/tx";
import * as _197 from "./mint/v1beta1/genesis";
import * as _198 from "./mint/v1beta1/mint";
import * as _199 from "./mint/v1beta1/query";
import * as _200 from "./pool-incentives/v1beta1/genesis";
import * as _201 from "./pool-incentives/v1beta1/gov";
import * as _202 from "./pool-incentives/v1beta1/incentives";
import * as _203 from "./pool-incentives/v1beta1/query";
import * as _204 from "./store/v1beta1/tree";
import * as _205 from "./superfluid/genesis";
import * as _206 from "./superfluid/params";
import * as _207 from "./superfluid/query";
import * as _208 from "./superfluid/superfluid";
import * as _209 from "./superfluid/tx";
import * as _210 from "./txfees/v1beta1/feetoken";
import * as _211 from "./txfees/v1beta1/genesis";
import * as _212 from "./txfees/v1beta1/gov";
import * as _213 from "./txfees/v1beta1/query";
import * as _272 from "./gamm/v1beta1/tx.amino";
import * as _273 from "./incentives/tx.amino";
import * as _274 from "./lockup/tx.amino";
import * as _275 from "./superfluid/tx.amino";
import * as _276 from "./gamm/v1beta1/tx.registry";
import * as _277 from "./incentives/tx.registry";
import * as _278 from "./lockup/tx.registry";
import * as _279 from "./superfluid/tx.registry";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._177,
      ..._178,
      ..._179,
      ..._180
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._181,
      ..._182
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._183,
      ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._272,
      ..._276
    };
  }
  export const incentives = { ..._188,
    ..._189,
    ..._190,
    ..._191,
    ..._192,
    ..._273,
    ..._277
  };
  export const lockup = { ..._193,
    ..._194,
    ..._195,
    ..._196,
    ..._274,
    ..._278
  };
  export namespace mint {
    export const v1beta1 = { ..._197,
      ..._198,
      ..._199
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._200,
      ..._201,
      ..._202,
      ..._203
    };
  }
  export namespace store {
    export const v1beta1 = { ..._204
    };
  }
  export const superfluid = { ..._205,
    ..._206,
    ..._207,
    ..._208,
    ..._209,
    ..._275,
    ..._279
  };
  export namespace txfees {
    export const v1beta1 = { ..._210,
      ..._211,
      ..._212,
      ..._213
    };
  }
}