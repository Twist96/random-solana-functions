export type DowntownProgram = {
  "version": "0.1.0",
  "name": "downtown_program",
  "instructions": [
    {
      "name": "createTown",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "town",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "insertHouse",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "town",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "houseVariant",
          "type": "u8"
        },
        {
          "name": "positionX",
          "type": "i64"
        },
        {
          "name": "positionY",
          "type": "i64"
        },
        {
          "name": "positionZ",
          "type": "i64"
        }
      ]
    },
    {
      "name": "withdrawHouse",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "town",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "fundRentVault",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawRentVault",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rentVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimRent",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rentVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "town",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "town",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "buildings",
            "type": {
              "vec": {
                "defined": "Building"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Building",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "houseVariant",
            "type": "u8"
          },
          {
            "name": "position",
            "type": {
              "defined": "Vector3D"
            }
          },
          {
            "name": "scale",
            "type": {
              "defined": "Vector3D"
            }
          },
          {
            "name": "stakeSlot",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Vector3D",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "x",
            "type": "i64"
          },
          {
            "name": "y",
            "type": "i64"
          },
          {
            "name": "z",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "BuildingNotFound",
      "msg": "House not found in town"
    },
    {
      "code": 6001,
      "name": "InsufficientVaultSol",
      "msg": "Not enough sol in vault"
    },
    {
      "code": 6002,
      "name": "InsufficientRentVault",
      "msg": "Not enough tokens to pay rent"
    },
    {
      "code": 6003,
      "name": "UnauthorizedSigner",
      "msg": "Asset not owned by signer"
    },
    {
      "code": 6004,
      "name": "InsufficientVaultAsset",
      "msg": "Asset not present in vault"
    }
  ]
};

export const IDL: DowntownProgram = {
  "version": "0.1.0",
  "name": "downtown_program",
  "instructions": [
    {
      "name": "createTown",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "town",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "insertHouse",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "town",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "houseVariant",
          "type": "u8"
        },
        {
          "name": "positionX",
          "type": "i64"
        },
        {
          "name": "positionY",
          "type": "i64"
        },
        {
          "name": "positionZ",
          "type": "i64"
        }
      ]
    },
    {
      "name": "withdrawHouse",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "town",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userNftAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "fundRentVault",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawRentVault",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rentVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimRent",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rentVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "town",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "town",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "buildings",
            "type": {
              "vec": {
                "defined": "Building"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Building",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "houseVariant",
            "type": "u8"
          },
          {
            "name": "position",
            "type": {
              "defined": "Vector3D"
            }
          },
          {
            "name": "scale",
            "type": {
              "defined": "Vector3D"
            }
          },
          {
            "name": "stakeSlot",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Vector3D",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "x",
            "type": "i64"
          },
          {
            "name": "y",
            "type": "i64"
          },
          {
            "name": "z",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "BuildingNotFound",
      "msg": "House not found in town"
    },
    {
      "code": 6001,
      "name": "InsufficientVaultSol",
      "msg": "Not enough sol in vault"
    },
    {
      "code": 6002,
      "name": "InsufficientRentVault",
      "msg": "Not enough tokens to pay rent"
    },
    {
      "code": 6003,
      "name": "UnauthorizedSigner",
      "msg": "Asset not owned by signer"
    },
    {
      "code": 6004,
      "name": "InsufficientVaultAsset",
      "msg": "Asset not present in vault"
    }
  ]
};
