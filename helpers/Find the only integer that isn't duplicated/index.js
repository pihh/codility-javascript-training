
/**
 * Discover the unpaired element in array
 * Used a bitwise operator to solve this. https://hackernoon.com/xor-the-magical-bit-wise-operator-24d3012ed821
 * HACK:
    a ^ b;
    a = 5 = 0101
    b = 3 = 0011;
    a ^ b = 0110 = 6;

    a ^ 0 = a;
    a ^ a = 0;

 * Everytime a XOR finds a repeated number it goes to zero, meaning that every duplicate value will count as 0 and the value
    that remains will be the missing integer .
*/