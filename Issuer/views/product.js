var abi = [
    {
        constant: false,
        inputs: [
            {
                name: 'pro',
                type: 'string',
            },
        ],
        name: 'addProduct',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'pro',
                type: 'string',
            },
        ],
        name: 'addTransaction',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [],
        name: 'killContract',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: 'pro',
                type: 'string',
            },
        ],
        name: 'Instructor',
        type: 'event',
    },
    {
        constant: true,
        inputs: [],
        name: 'getNumOfProducts',
        outputs: [
            {
                name: '',
                type: 'uint8',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'number',
                type: 'uint8',
            },
        ],
        name: 'getProductString',
        outputs: [
            {
                name: '',
                type: 'string',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
]
