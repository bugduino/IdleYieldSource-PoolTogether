/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { IdleYieldSourceProxyFactory } from "../IdleYieldSourceProxyFactory";

export class IdleYieldSourceProxyFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _instance: string,
    _iGenericProxyFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IdleYieldSourceProxyFactory> {
    return super.deploy(
      _instance,
      _iGenericProxyFactory,
      overrides || {}
    ) as Promise<IdleYieldSourceProxyFactory>;
  }
  getDeployTransaction(
    _instance: string,
    _iGenericProxyFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _instance,
      _iGenericProxyFactory,
      overrides || {}
    );
  }
  attach(address: string): IdleYieldSourceProxyFactory {
    return super.attach(address) as IdleYieldSourceProxyFactory;
  }
  connect(signer: Signer): IdleYieldSourceProxyFactory__factory {
    return super.connect(signer) as IdleYieldSourceProxyFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IdleYieldSourceProxyFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IdleYieldSourceProxyFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_instance",
        type: "address",
      },
      {
        internalType: "address",
        name: "_iGenericProxyFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_idleToken",
        type: "address",
      },
    ],
    name: "createNewProxy",
    outputs: [
      {
        internalType: "address",
        name: "instanceCreated",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "iGenericProxyFactory",
    outputs: [
      {
        internalType: "contract IGenericProxyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "idleYieldSourceInstance",
    outputs: [
      {
        internalType: "contract IdleYieldSource",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161077f38038061077f833981810160405281019061003291906100cf565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610154565b6000815190506100c98161013d565b92915050565b600080604083850312156100e257600080fd5b60006100f0858286016100ba565b9250506020610101858286016100ba565b9150509250929050565b60006101168261011d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6101468161010b565b811461015157600080fd5b50565b61061c806101636000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634f9ccab81461004657806364a9326414610077578063a25d79c514610095575b600080fd5b610060600480360381019061005b9190610301565b6100b3565b60405161006e9291906103ff565b60405180910390f35b61007f610225565b60405161008c919061042f565b60405180910390f35b61009d61024b565b6040516100aa919061044a565b60405180910390f35b60006060600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a3f697ba60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168560405160240161012791906103e4565b6040516020818303038152906040527fc4d66de8000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518363ffffffff1660e01b81526004016101c19291906103ff565b600060405180830381600087803b1580156101db57600080fd5b505af11580156101ef573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610218919061032a565b8092508193505050915091565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061028261027d84610496565b610465565b90508281526020810184848401111561029a57600080fd5b6102a584828561055c565b509392505050565b6000813590506102bc816105cf565b92915050565b6000815190506102d1816105cf565b92915050565b600082601f8301126102e857600080fd5b81516102f884826020860161026f565b91505092915050565b60006020828403121561031357600080fd5b6000610321848285016102ad565b91505092915050565b6000806040838503121561033d57600080fd5b600061034b858286016102c2565b925050602083015167ffffffffffffffff81111561036857600080fd5b610374858286016102d7565b9150509250929050565b610387816104e2565b82525050565b6000610398826104c6565b6103a281856104d1565b93506103b281856020860161055c565b6103bb816105be565b840191505092915050565b6103cf81610514565b82525050565b6103de81610538565b82525050565b60006020820190506103f9600083018461037e565b92915050565b6000604082019050610414600083018561037e565b8181036020830152610426818461038d565b90509392505050565b600060208201905061044460008301846103c6565b92915050565b600060208201905061045f60008301846103d5565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561048c5761048b61058f565b5b8060405250919050565b600067ffffffffffffffff8211156104b1576104b061058f565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006104ed826104f4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061051f82610526565b9050919050565b6000610531826104f4565b9050919050565b60006105438261054a565b9050919050565b6000610555826104f4565b9050919050565b60005b8381101561057a57808201518184015260208101905061055f565b83811115610589576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6105d8816104e2565b81146105e357600080fd5b5056fea2646970667358221220c7c357b67e47572f7dd117caf2d8271b9fe02bc956c0800e15e3e4af03e6053f64736f6c63430008000033";
