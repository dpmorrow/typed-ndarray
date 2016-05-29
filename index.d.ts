declare function ndarray(data : any, shape?: number[], stride?: number[], offset?: number) : ndarray.NDArray;
declare namespace ndarray {
  export class NDArray {
    constructor(data : any, shape?: number[], stride?: number[], offset?: number);

    get(...ijnv) : any;
    set(...ijnv) : void;
    index(...ijnv) : number;

    lo(...ijk) : NDArray;
    hi(...ijk) : NDArray;
    step(...ijk) : NDArray;
    transpose(...p0p1) : NDArray;
    pick(...p0p1) : NDArray;

    shape : number[];
    stride: number[];
    offset: number;
    dtype : string;
    size : number;
    order : number[];
    dimension: number;
  }
}

export = ndarray;
