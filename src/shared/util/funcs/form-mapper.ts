export type KeyValue = {
  keyValue: { key: string; value: string | number }[];
};

export type Fn = {
  fn: (...args: any[]) => void;
};

export type Transforms = {
  transforms: { key: string; tFn: (value: string | number) => any }[];
};

export const formMapper = (keyValueObj: KeyValue, fnObj: Fn, transformsObj?: Transforms) => {
  let tKeys: string[] | undefined;
  let tFns: ((value: string | number) => any)[];

  if (transformsObj) {
    tKeys = transformsObj.transforms.map((transform) => transform.key);
    tFns = transformsObj.transforms.map((transform) => transform.tFn);
  }

  for (let i = 0; i < keyValueObj.keyValue.length; i++) {
    let { key, value } = keyValueObj.keyValue[i];
    if (tKeys?.includes(key)) {
        const tIndx = tKeys.indexOf(key);
        value = tFns![tIndx](value)
    }
    fnObj.fn(key, value);
  }
};
