/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { SafeERC20WrapperUpgradeable } from "../SafeERC20WrapperUpgradeable";

export class SafeERC20WrapperUpgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SafeERC20WrapperUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<SafeERC20WrapperUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SafeERC20WrapperUpgradeable {
    return super.attach(address) as SafeERC20WrapperUpgradeable;
  }
  connect(signer: Signer): SafeERC20WrapperUpgradeable__factory {
    return super.connect(signer) as SafeERC20WrapperUpgradeable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeERC20WrapperUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SafeERC20WrapperUpgradeable;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "allowance_",
        type: "uint256",
      },
    ],
    name: "setAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506114a6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80633ba93f261161005b5780633ba93f261461012557806370a0823114610141578063a9059cbb14610171578063dd62ed3e146101a157610088565b8063095ea7b31461008d57806310bad4cf146100bd57806311e330b2146100d957806323b872dd146100f5575b600080fd5b6100a760048036038101906100a29190610dd3565b6101d1565b6040516100b4919061108b565b60405180910390f35b6100d760048036038101906100d29190610e38565b610226565b005b6100f360048036038101906100ee9190610e38565b610277565b005b61010f600480360381019061010a9190610d84565b6102c8565b60405161011c919061108b565b60405180910390f35b61013f600480360381019061013a9190610e38565b610320565b005b61015b60048036038101906101569190610d1f565b6103b0565b6040516101689190611168565b60405180910390f35b61018b60048036038101906101869190610dd3565b610463565b604051610198919061108b565b60405180910390f35b6101bb60048036038101906101b69190610d48565b6104b8565b6040516101c89190611168565b60405180910390f35b60006102208383603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661056f9092919063ffffffff16565b92915050565b610274600082603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166106cd9092919063ffffffff16565b50565b6102c5600082603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661082e9092919063ffffffff16565b50565b6000610319848484603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661094f909392919063ffffffff16565b9392505050565b603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633ba93f26826040518263ffffffff1660e01b815260040161037b9190611168565b600060405180830381600087803b15801561039557600080fd5b505af11580156103a9573d6000803e3d6000fd5b5050505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b815260040161040d9190610fe7565b60206040518083038186803b15801561042557600080fd5b505afa158015610439573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045d9190610e61565b50919050565b60006104b28383603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166109d89092919063ffffffff16565b92915050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e84846040518363ffffffff1660e01b8152600401610517929190611002565b60206040518083038186803b15801561052f57600080fd5b505afa158015610543573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105679190610e61565b905092915050565b6000811480610608575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b81526004016105b6929190611002565b60206040518083038186803b1580156105ce57600080fd5b505afa1580156105e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106069190610e61565b145b610647576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063e90611148565b60405180910390fd5b6106c88363095ea7b360e01b8484604051602401610666929190611062565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610a5e565b505050565b60008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b815260040161070a929190611002565b60206040518083038186803b15801561072257600080fd5b505afa158015610736573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075a9190610e61565b90508181101561079f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610796906110c8565b60405180910390fd5b600082820390506108278563095ea7b360e01b86846040516024016107c5929190611062565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610a5e565b5050505050565b6000818473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30866040518363ffffffff1660e01b815260040161086c929190611002565b60206040518083038186803b15801561088457600080fd5b505afa158015610898573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bc9190610e61565b6108c691906111b5565b90506109498463095ea7b360e01b85846040516024016108e7929190611062565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610a5e565b50505050565b6109d2846323b872dd60e01b8585856040516024016109709392919061102b565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610a5e565b50505050565b610a598363a9059cbb60e01b84846040516024016109f7929190611062565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610a5e565b505050565b6000610ac0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610b259092919063ffffffff16565b9050600081511115610b205780806020019051810190610ae09190610e0f565b610b1f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1690611128565b60405180910390fd5b5b505050565b6060610b348484600085610b3d565b90509392505050565b606082471015610b82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b79906110e8565b60405180910390fd5b610b8b85610c51565b610bca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc190611108565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610bf39190610fd0565b60006040518083038185875af1925050503d8060008114610c30576040519150601f19603f3d011682016040523d82523d6000602084013e610c35565b606091505b5091509150610c45828286610c64565b92505050949350505050565b600080823b905060008111915050919050565b60608315610c7457829050610cc4565b600083511115610c875782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cbb91906110a6565b60405180910390fd5b9392505050565b600081359050610cda8161142b565b92915050565b600081519050610cef81611442565b92915050565b600081359050610d0481611459565b92915050565b600081519050610d1981611459565b92915050565b600060208284031215610d3157600080fd5b6000610d3f84828501610ccb565b91505092915050565b60008060408385031215610d5b57600080fd5b6000610d6985828601610ccb565b9250506020610d7a85828601610ccb565b9150509250929050565b600080600060608486031215610d9957600080fd5b6000610da786828701610ccb565b9350506020610db886828701610ccb565b9250506040610dc986828701610cf5565b9150509250925092565b60008060408385031215610de657600080fd5b6000610df485828601610ccb565b9250506020610e0585828601610cf5565b9150509250929050565b600060208284031215610e2157600080fd5b6000610e2f84828501610ce0565b91505092915050565b600060208284031215610e4a57600080fd5b6000610e5884828501610cf5565b91505092915050565b600060208284031215610e7357600080fd5b6000610e8184828501610d0a565b91505092915050565b610e938161120b565b82525050565b610ea28161121d565b82525050565b6000610eb382611183565b610ebd8185611199565b9350610ecd818560208601611253565b80840191505092915050565b6000610ee48261118e565b610eee81856111a4565b9350610efe818560208601611253565b610f07816112b5565b840191505092915050565b6000610f1f6029836111a4565b9150610f2a826112c6565b604082019050919050565b6000610f426026836111a4565b9150610f4d82611315565b604082019050919050565b6000610f65601d836111a4565b9150610f7082611364565b602082019050919050565b6000610f88602a836111a4565b9150610f938261138d565b604082019050919050565b6000610fab6036836111a4565b9150610fb6826113dc565b604082019050919050565b610fca81611249565b82525050565b6000610fdc8284610ea8565b915081905092915050565b6000602082019050610ffc6000830184610e8a565b92915050565b60006040820190506110176000830185610e8a565b6110246020830184610e8a565b9392505050565b60006060820190506110406000830186610e8a565b61104d6020830185610e8a565b61105a6040830184610fc1565b949350505050565b60006040820190506110776000830185610e8a565b6110846020830184610fc1565b9392505050565b60006020820190506110a06000830184610e99565b92915050565b600060208201905081810360008301526110c08184610ed9565b905092915050565b600060208201905081810360008301526110e181610f12565b9050919050565b6000602082019050818103600083015261110181610f35565b9050919050565b6000602082019050818103600083015261112181610f58565b9050919050565b6000602082019050818103600083015261114181610f7b565b9050919050565b6000602082019050818103600083015261116181610f9e565b9050919050565b600060208201905061117d6000830184610fc1565b92915050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006111c082611249565b91506111cb83611249565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611200576111ff611286565b5b828201905092915050565b600061121682611229565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015611271578082015181840152602081019050611256565b83811115611280576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f5361666545524332303a2064656372656173656420616c6c6f77616e6365206260008201527f656c6f77207a65726f0000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b6114348161120b565b811461143f57600080fd5b50565b61144b8161121d565b811461145657600080fd5b50565b61146281611249565b811461146d57600080fd5b5056fea2646970667358221220feec7fe14c6d9bb4f6aeb026769e763cfda1871fdf2d3c873301f1fd6dba04a164736f6c63430008040033";
