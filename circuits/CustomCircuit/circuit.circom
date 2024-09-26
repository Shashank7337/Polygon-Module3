pragma circom 2.0.0;

template CustomCircuit () {   
    signal input a;
    signal input b;
    
    signal x;
    signal d;
    
    signal output y;
    
    component andGate=AND();
    component notGate=NOT();
    component orGate=OR();

    //circuit logic

    //AND GATE
    andGate.a<== a;
    andGate.b<== b;
    x<==andGate.out;

    //NOT GATE
    notGate.in<==b;
    d<==notGate.out;

    //OR GATE
    orGate.a<==x;
    orGate.b<==d;
    y<==orGate.out;
}
template AND() {
    signal input a;
    signal input b;
    signal output out;

    out <== a*b;
}
template NOT() {
    signal input in;
    signal output out;

    out <== 1 + in - 2*in;
}
template OR(){
    signal input a;
    signal input b;
    signal output out;
    out<==a+b-a*b;
}
component main = CustomCircuit();
