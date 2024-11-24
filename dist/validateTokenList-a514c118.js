import _typeof from '@babel/runtime/helpers/typeof';

var validate = validate10;

var func2 = require("ajv/dist/runtime/ucs2length").default;

var pattern0 = new RegExp("^[\\w ]+$", "u");
var pattern4 = new RegExp("^[\\w]+$", "u");
var pattern10 = new RegExp("^[ \\w]+$", "u");
var pattern11 = new RegExp("^[ \\w\\.,:]+$", "u");

var formats0 = require("ajv-formats/dist/formats").fullFormats["date-time"];

var formats2 = require("ajv-formats/dist/formats").fullFormats.uri;
var pattern1 = new RegExp("^0x[a-fA-F0-9]{40}$", "u");
var pattern2 = new RegExp("^[ \\S+]+$", "u");
var pattern3 = new RegExp("^\\S+$", "u");

function validate15(data) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$instancePath = _ref.instancePath,
      instancePath = _ref$instancePath === void 0 ? "" : _ref$instancePath;
      _ref.parentData;
      _ref.parentDataProperty;
      _ref.rootData;

  var vErrors = null;
  var errors = 0;
  var _errs0 = errors;
  var valid0 = false;
  var _errs1 = errors;
  var _errs3 = errors;
  var valid2 = false;
  var _errs4 = errors;

  if (errors === _errs4) {
    if (typeof data === "string") {
      if (func2(data) > 42) {
        var err0 = {
          instancePath: instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
          keyword: "maxLength",
          params: {
            limit: 42
          },
          message: "must NOT have more than 42 characters"
        };

        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }

        errors++;
      } else {
        if (func2(data) < 1) {
          var err1 = {
            instancePath: instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
            keyword: "minLength",
            params: {
              limit: 1
            },
            message: "must NOT have fewer than 1 characters"
          };

          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }

          errors++;
        }
      }
    } else {
      var err2 = {
        instancePath: instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
        keyword: "type",
        params: {
          type: "string"
        },
        message: "must be string"
      };

      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }

      errors++;
    }
  }

  var _valid1 = _errs4 === errors;

  valid2 = valid2 || _valid1;

  if (!valid2) {
    var _errs6 = errors;

    if (typeof data !== "boolean") {
      var err3 = {
        instancePath: instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
        keyword: "type",
        params: {
          type: "boolean"
        },
        message: "must be boolean"
      };

      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }

      errors++;
    }

    var _valid1 = _errs6 === errors;

    valid2 = valid2 || _valid1;

    if (!valid2) {
      var _errs8 = errors;

      if (!(typeof data == "number" && isFinite(data))) {
        var err4 = {
          instancePath: instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
          keyword: "type",
          params: {
            type: "number"
          },
          message: "must be number"
        };

        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }

        errors++;
      }

      var _valid1 = _errs8 === errors;

      valid2 = valid2 || _valid1;

      if (!valid2) {
        var _errs10 = errors;

        if (data !== null) {
          var err5 = {
            instancePath: instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
            keyword: "type",
            params: {
              type: "null"
            },
            message: "must be null"
          };

          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }

          errors++;
        }

        var _valid1 = _errs10 === errors;

        valid2 = valid2 || _valid1;
      }
    }
  }

  if (!valid2) {
    var err6 = {
      instancePath: instancePath,
      schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };

    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }

    errors++;
  } else {
    errors = _errs3;

    if (vErrors !== null) {
      if (_errs3) {
        vErrors.length = _errs3;
      } else {
        vErrors = null;
      }
    }
  }

  var _valid0 = _errs1 === errors;

  valid0 = valid0 || _valid0;

  if (!valid0) {
    var err7 = {
      instancePath: instancePath,
      schemaPath: "#/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };

    if (vErrors === null) {
      vErrors = [err7];
    } else {
      vErrors.push(err7);
    }

    errors++;
    validate15.errors = vErrors;
    return false;
  } else {
    errors = _errs0;

    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }

  validate15.errors = vErrors;
  return errors === 0;
}

function validate14(data) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$instancePath = _ref2.instancePath,
      instancePath = _ref2$instancePath === void 0 ? "" : _ref2$instancePath;
      _ref2.parentData;
      _ref2.parentDataProperty;
      var _ref2$rootData = _ref2.rootData,
      rootData = _ref2$rootData === void 0 ? data : _ref2$rootData;

  var vErrors = null;
  var errors = 0;
  var _errs0 = errors;
  var valid0 = false;
  var _errs1 = errors;
  var _errs3 = errors;
  var valid2 = false;
  var _errs4 = errors;

  if (errors === _errs4) {
    if (typeof data === "string") {
      if (func2(data) > 42) {
        var err0 = {
          instancePath: instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
          keyword: "maxLength",
          params: {
            limit: 42
          },
          message: "must NOT have more than 42 characters"
        };

        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }

        errors++;
      } else {
        if (func2(data) < 1) {
          var err1 = {
            instancePath: instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
            keyword: "minLength",
            params: {
              limit: 1
            },
            message: "must NOT have fewer than 1 characters"
          };

          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }

          errors++;
        }
      }
    } else {
      var err2 = {
        instancePath: instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
        keyword: "type",
        params: {
          type: "string"
        },
        message: "must be string"
      };

      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }

      errors++;
    }
  }

  var _valid1 = _errs4 === errors;

  valid2 = valid2 || _valid1;

  if (!valid2) {
    var _errs6 = errors;

    if (typeof data !== "boolean") {
      var err3 = {
        instancePath: instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
        keyword: "type",
        params: {
          type: "boolean"
        },
        message: "must be boolean"
      };

      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }

      errors++;
    }

    var _valid1 = _errs6 === errors;

    valid2 = valid2 || _valid1;

    if (!valid2) {
      var _errs8 = errors;

      if (!(typeof data == "number" && isFinite(data))) {
        var err4 = {
          instancePath: instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
          keyword: "type",
          params: {
            type: "number"
          },
          message: "must be number"
        };

        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }

        errors++;
      }

      var _valid1 = _errs8 === errors;

      valid2 = valid2 || _valid1;

      if (!valid2) {
        var _errs10 = errors;

        if (data !== null) {
          var err5 = {
            instancePath: instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
            keyword: "type",
            params: {
              type: "null"
            },
            message: "must be null"
          };

          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }

          errors++;
        }

        var _valid1 = _errs10 === errors;

        valid2 = valid2 || _valid1;
      }
    }
  }

  if (!valid2) {
    var err6 = {
      instancePath: instancePath,
      schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };

    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }

    errors++;
  } else {
    errors = _errs3;

    if (vErrors !== null) {
      if (_errs3) {
        vErrors.length = _errs3;
      } else {
        vErrors = null;
      }
    }
  }

  var _valid0 = _errs1 === errors;

  valid0 = valid0 || _valid0;

  if (!valid0) {
    var _errs12 = errors;

    if (errors === _errs12) {
      if (data && _typeof(data) == "object" && !Array.isArray(data)) {
        if (Object.keys(data).length > 10) {
          var err7 = {
            instancePath: instancePath,
            schemaPath: "#/anyOf/1/maxProperties",
            keyword: "maxProperties",
            params: {
              limit: 10
            },
            message: "must NOT have more than 10 properties"
          };

          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }

          errors++;
        } else {
          for (var key0 in data) {
            var _errs14 = errors;
            var _errs15 = errors;

            if (errors === _errs15) {
              if (typeof key0 === "string") {
                if (func2(key0) > 40) {
                  var err8 = {
                    instancePath: instancePath,
                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                    keyword: "maxLength",
                    params: {
                      limit: 40
                    },
                    message: "must NOT have more than 40 characters",
                    propertyName: key0
                  };

                  if (vErrors === null) {
                    vErrors = [err8];
                  } else {
                    vErrors.push(err8);
                  }

                  errors++;
                } else {
                  if (func2(key0) < 1) {
                    var err9 = {
                      instancePath: instancePath,
                      schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                      keyword: "minLength",
                      params: {
                        limit: 1
                      },
                      message: "must NOT have fewer than 1 characters",
                      propertyName: key0
                    };

                    if (vErrors === null) {
                      vErrors = [err9];
                    } else {
                      vErrors.push(err9);
                    }

                    errors++;
                  } else {
                    if (!pattern4.test(key0)) {
                      var err10 = {
                        instancePath: instancePath,
                        schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                        keyword: "pattern",
                        params: {
                          pattern: "^[\\w]+$"
                        },
                        message: "must match pattern \"" + "^[\\w]+$" + "\"",
                        propertyName: key0
                      };

                      if (vErrors === null) {
                        vErrors = [err10];
                      } else {
                        vErrors.push(err10);
                      }

                      errors++;
                    }
                  }
                }
              } else {
                var err11 = {
                  instancePath: instancePath,
                  schemaPath: "#/definitions/ExtensionIdentifier/type",
                  keyword: "type",
                  params: {
                    type: "string"
                  },
                  message: "must be string",
                  propertyName: key0
                };

                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }

                errors++;
              }
            }

            var valid3 = _errs14 === errors;

            if (!valid3) {
              var err12 = {
                instancePath: instancePath,
                schemaPath: "#/anyOf/1/propertyNames",
                keyword: "propertyNames",
                params: {
                  propertyName: key0
                },
                message: "property name must be valid"
              };

              if (vErrors === null) {
                vErrors = [err12];
              } else {
                vErrors.push(err12);
              }

              errors++;
              break;
            }
          }

          if (valid3) {
            for (var key1 in data) {
              var _errs18 = errors;

              if (!validate15(data[key1], {
                instancePath: instancePath + "/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
                parentData: data,
                parentDataProperty: key1,
                rootData: rootData
              })) {
                vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
                errors = vErrors.length;
              }

              var valid5 = _errs18 === errors;

              if (!valid5) {
                break;
              }
            }
          }
        }
      } else {
        var err13 = {
          instancePath: instancePath,
          schemaPath: "#/anyOf/1/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };

        if (vErrors === null) {
          vErrors = [err13];
        } else {
          vErrors.push(err13);
        }

        errors++;
      }
    }

    var _valid0 = _errs12 === errors;

    valid0 = valid0 || _valid0;
  }

  if (!valid0) {
    var err14 = {
      instancePath: instancePath,
      schemaPath: "#/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };

    if (vErrors === null) {
      vErrors = [err14];
    } else {
      vErrors.push(err14);
    }

    errors++;
    validate14.errors = vErrors;
    return false;
  } else {
    errors = _errs0;

    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }

  validate14.errors = vErrors;
  return errors === 0;
}

function validate13(data) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref3$instancePath = _ref3.instancePath,
      instancePath = _ref3$instancePath === void 0 ? "" : _ref3$instancePath;
      _ref3.parentData;
      _ref3.parentDataProperty;
      var _ref3$rootData = _ref3.rootData,
      rootData = _ref3$rootData === void 0 ? data : _ref3$rootData;

  var vErrors = null;
  var errors = 0;
  var _errs0 = errors;
  var valid0 = false;
  var _errs1 = errors;
  var _errs3 = errors;
  var valid2 = false;
  var _errs4 = errors;

  if (errors === _errs4) {
    if (typeof data === "string") {
      if (func2(data) > 42) {
        var err0 = {
          instancePath: instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
          keyword: "maxLength",
          params: {
            limit: 42
          },
          message: "must NOT have more than 42 characters"
        };

        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }

        errors++;
      } else {
        if (func2(data) < 1) {
          var err1 = {
            instancePath: instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
            keyword: "minLength",
            params: {
              limit: 1
            },
            message: "must NOT have fewer than 1 characters"
          };

          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }

          errors++;
        }
      }
    } else {
      var err2 = {
        instancePath: instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
        keyword: "type",
        params: {
          type: "string"
        },
        message: "must be string"
      };

      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }

      errors++;
    }
  }

  var _valid1 = _errs4 === errors;

  valid2 = valid2 || _valid1;

  if (!valid2) {
    var _errs6 = errors;

    if (typeof data !== "boolean") {
      var err3 = {
        instancePath: instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
        keyword: "type",
        params: {
          type: "boolean"
        },
        message: "must be boolean"
      };

      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }

      errors++;
    }

    var _valid1 = _errs6 === errors;

    valid2 = valid2 || _valid1;

    if (!valid2) {
      var _errs8 = errors;

      if (!(typeof data == "number" && isFinite(data))) {
        var err4 = {
          instancePath: instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
          keyword: "type",
          params: {
            type: "number"
          },
          message: "must be number"
        };

        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }

        errors++;
      }

      var _valid1 = _errs8 === errors;

      valid2 = valid2 || _valid1;

      if (!valid2) {
        var _errs10 = errors;

        if (data !== null) {
          var err5 = {
            instancePath: instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
            keyword: "type",
            params: {
              type: "null"
            },
            message: "must be null"
          };

          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }

          errors++;
        }

        var _valid1 = _errs10 === errors;

        valid2 = valid2 || _valid1;
      }
    }
  }

  if (!valid2) {
    var err6 = {
      instancePath: instancePath,
      schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };

    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }

    errors++;
  } else {
    errors = _errs3;

    if (vErrors !== null) {
      if (_errs3) {
        vErrors.length = _errs3;
      } else {
        vErrors = null;
      }
    }
  }

  var _valid0 = _errs1 === errors;

  valid0 = valid0 || _valid0;

  if (!valid0) {
    var _errs12 = errors;

    if (errors === _errs12) {
      if (data && _typeof(data) == "object" && !Array.isArray(data)) {
        if (Object.keys(data).length > 10) {
          var err7 = {
            instancePath: instancePath,
            schemaPath: "#/anyOf/1/maxProperties",
            keyword: "maxProperties",
            params: {
              limit: 10
            },
            message: "must NOT have more than 10 properties"
          };

          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }

          errors++;
        } else {
          for (var key0 in data) {
            var _errs14 = errors;
            var _errs15 = errors;

            if (errors === _errs15) {
              if (typeof key0 === "string") {
                if (func2(key0) > 40) {
                  var err8 = {
                    instancePath: instancePath,
                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                    keyword: "maxLength",
                    params: {
                      limit: 40
                    },
                    message: "must NOT have more than 40 characters",
                    propertyName: key0
                  };

                  if (vErrors === null) {
                    vErrors = [err8];
                  } else {
                    vErrors.push(err8);
                  }

                  errors++;
                } else {
                  if (func2(key0) < 1) {
                    var err9 = {
                      instancePath: instancePath,
                      schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                      keyword: "minLength",
                      params: {
                        limit: 1
                      },
                      message: "must NOT have fewer than 1 characters",
                      propertyName: key0
                    };

                    if (vErrors === null) {
                      vErrors = [err9];
                    } else {
                      vErrors.push(err9);
                    }

                    errors++;
                  } else {
                    if (!pattern4.test(key0)) {
                      var err10 = {
                        instancePath: instancePath,
                        schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                        keyword: "pattern",
                        params: {
                          pattern: "^[\\w]+$"
                        },
                        message: "must match pattern \"" + "^[\\w]+$" + "\"",
                        propertyName: key0
                      };

                      if (vErrors === null) {
                        vErrors = [err10];
                      } else {
                        vErrors.push(err10);
                      }

                      errors++;
                    }
                  }
                }
              } else {
                var err11 = {
                  instancePath: instancePath,
                  schemaPath: "#/definitions/ExtensionIdentifier/type",
                  keyword: "type",
                  params: {
                    type: "string"
                  },
                  message: "must be string",
                  propertyName: key0
                };

                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }

                errors++;
              }
            }

            var valid3 = _errs14 === errors;

            if (!valid3) {
              var err12 = {
                instancePath: instancePath,
                schemaPath: "#/anyOf/1/propertyNames",
                keyword: "propertyNames",
                params: {
                  propertyName: key0
                },
                message: "property name must be valid"
              };

              if (vErrors === null) {
                vErrors = [err12];
              } else {
                vErrors.push(err12);
              }

              errors++;
              break;
            }
          }

          if (valid3) {
            for (var key1 in data) {
              var _errs18 = errors;

              if (!validate14(data[key1], {
                instancePath: instancePath + "/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
                parentData: data,
                parentDataProperty: key1,
                rootData: rootData
              })) {
                vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
                errors = vErrors.length;
              }

              var valid5 = _errs18 === errors;

              if (!valid5) {
                break;
              }
            }
          }
        }
      } else {
        var err13 = {
          instancePath: instancePath,
          schemaPath: "#/anyOf/1/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };

        if (vErrors === null) {
          vErrors = [err13];
        } else {
          vErrors.push(err13);
        }

        errors++;
      }
    }

    var _valid0 = _errs12 === errors;

    valid0 = valid0 || _valid0;
  }

  if (!valid0) {
    var err14 = {
      instancePath: instancePath,
      schemaPath: "#/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };

    if (vErrors === null) {
      vErrors = [err14];
    } else {
      vErrors.push(err14);
    }

    errors++;
    validate13.errors = vErrors;
    return false;
  } else {
    errors = _errs0;

    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }

  validate13.errors = vErrors;
  return errors === 0;
}

function validate12(data) {
  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref4$instancePath = _ref4.instancePath,
      instancePath = _ref4$instancePath === void 0 ? "" : _ref4$instancePath;
      _ref4.parentData;
      _ref4.parentDataProperty;
      var _ref4$rootData = _ref4.rootData,
      rootData = _ref4$rootData === void 0 ? data : _ref4$rootData;

  var vErrors = null;
  var errors = 0;

  if (errors === 0) {
    if (data && _typeof(data) == "object" && !Array.isArray(data)) {
      if (Object.keys(data).length > 10) {
        validate12.errors = [{
          instancePath: instancePath,
          schemaPath: "#/maxProperties",
          keyword: "maxProperties",
          params: {
            limit: 10
          },
          message: "must NOT have more than 10 properties"
        }];
        return false;
      } else {
        for (var key0 in data) {
          var _errs1 = errors;
          var _errs2 = errors;

          if (errors === _errs2) {
            if (typeof key0 === "string") {
              if (func2(key0) > 40) {
                var err0 = {
                  instancePath: instancePath,
                  schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                  keyword: "maxLength",
                  params: {
                    limit: 40
                  },
                  message: "must NOT have more than 40 characters",
                  propertyName: key0
                };

                if (vErrors === null) {
                  vErrors = [err0];
                } else {
                  vErrors.push(err0);
                }

                errors++;
              } else {
                if (func2(key0) < 1) {
                  var err1 = {
                    instancePath: instancePath,
                    schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                    keyword: "minLength",
                    params: {
                      limit: 1
                    },
                    message: "must NOT have fewer than 1 characters",
                    propertyName: key0
                  };

                  if (vErrors === null) {
                    vErrors = [err1];
                  } else {
                    vErrors.push(err1);
                  }

                  errors++;
                } else {
                  if (!pattern4.test(key0)) {
                    var err2 = {
                      instancePath: instancePath,
                      schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                      keyword: "pattern",
                      params: {
                        pattern: "^[\\w]+$"
                      },
                      message: "must match pattern \"" + "^[\\w]+$" + "\"",
                      propertyName: key0
                    };

                    if (vErrors === null) {
                      vErrors = [err2];
                    } else {
                      vErrors.push(err2);
                    }

                    errors++;
                  }
                }
              }
            } else {
              var err3 = {
                instancePath: instancePath,
                schemaPath: "#/definitions/ExtensionIdentifier/type",
                keyword: "type",
                params: {
                  type: "string"
                },
                message: "must be string",
                propertyName: key0
              };

              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }

              errors++;
            }
          }

          var valid0 = _errs1 === errors;

          if (!valid0) {
            var err4 = {
              instancePath: instancePath,
              schemaPath: "#/propertyNames",
              keyword: "propertyNames",
              params: {
                propertyName: key0
              },
              message: "property name must be valid"
            };

            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }

            errors++;
            validate12.errors = vErrors;
            return false;
          }
        }

        if (valid0) {
          for (var key1 in data) {
            var _errs5 = errors;

            if (!validate13(data[key1], {
              instancePath: instancePath + "/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
              parentData: data,
              parentDataProperty: key1,
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
              errors = vErrors.length;
            }

            var valid2 = _errs5 === errors;

            if (!valid2) {
              break;
            }
          }
        }
      }
    } else {
      validate12.errors = [{
        instancePath: instancePath,
        schemaPath: "#/type",
        keyword: "type",
        params: {
          type: "object"
        },
        message: "must be object"
      }];
      return false;
    }
  }

  validate12.errors = vErrors;
  return errors === 0;
}

function validate11(data) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref5$instancePath = _ref5.instancePath,
      instancePath = _ref5$instancePath === void 0 ? "" : _ref5$instancePath;
      _ref5.parentData;
      _ref5.parentDataProperty;
      var _ref5$rootData = _ref5.rootData,
      rootData = _ref5$rootData === void 0 ? data : _ref5$rootData;

  var vErrors = null;
  var errors = 0;

  if (errors === 0) {
    if (data && _typeof(data) == "object" && !Array.isArray(data)) {
      var missing0;

      if (data.chainId === undefined && (missing0 = "chainId") || data.address === undefined && (missing0 = "address") || data.decimals === undefined && (missing0 = "decimals") || data.name === undefined && (missing0 = "name") || data.symbol === undefined && (missing0 = "symbol")) {
        validate11.errors = [{
          instancePath: instancePath,
          schemaPath: "#/required",
          keyword: "required",
          params: {
            missingProperty: missing0
          },
          message: "must have required property '" + missing0 + "'"
        }];
        return false;
      } else {
        var _errs1 = errors;

        for (var key0 in data) {
          if (!(key0 === "chainId" || key0 === "address" || key0 === "decimals" || key0 === "name" || key0 === "symbol" || key0 === "logoURI" || key0 === "tags" || key0 === "extensions")) {
            validate11.errors = [{
              instancePath: instancePath,
              schemaPath: "#/additionalProperties",
              keyword: "additionalProperties",
              params: {
                additionalProperty: key0
              },
              message: "must NOT have additional properties"
            }];
            return false;
          }
        }

        if (_errs1 === errors) {
          if (data.chainId !== undefined) {
            var data0 = data.chainId;
            var _errs2 = errors;

            if (!(typeof data0 == "number" && !(data0 % 1) && !isNaN(data0) && isFinite(data0))) {
              validate11.errors = [{
                instancePath: instancePath + "/chainId",
                schemaPath: "#/properties/chainId/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              }];
              return false;
            }

            if (errors === _errs2) {
              if (typeof data0 == "number" && isFinite(data0)) {
                if (data0 < 1 || isNaN(data0)) {
                  validate11.errors = [{
                    instancePath: instancePath + "/chainId",
                    schemaPath: "#/properties/chainId/minimum",
                    keyword: "minimum",
                    params: {
                      comparison: ">=",
                      limit: 1
                    },
                    message: "must be >= 1"
                  }];
                  return false;
                }
              }
            }

            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }

          if (valid0) {
            if (data.address !== undefined) {
              var data1 = data.address;
              var _errs4 = errors;

              if (errors === _errs4) {
                if (typeof data1 === "string") {
                  if (!pattern1.test(data1)) {
                    validate11.errors = [{
                      instancePath: instancePath + "/address",
                      schemaPath: "#/properties/address/pattern",
                      keyword: "pattern",
                      params: {
                        pattern: "^0x[a-fA-F0-9]{40}$"
                      },
                      message: "must match pattern \"" + "^0x[a-fA-F0-9]{40}$" + "\""
                    }];
                    return false;
                  }
                } else {
                  validate11.errors = [{
                    instancePath: instancePath + "/address",
                    schemaPath: "#/properties/address/type",
                    keyword: "type",
                    params: {
                      type: "string"
                    },
                    message: "must be string"
                  }];
                  return false;
                }
              }

              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }

            if (valid0) {
              if (data.decimals !== undefined) {
                var data2 = data.decimals;
                var _errs6 = errors;

                if (!(typeof data2 == "number" && !(data2 % 1) && !isNaN(data2) && isFinite(data2))) {
                  validate11.errors = [{
                    instancePath: instancePath + "/decimals",
                    schemaPath: "#/properties/decimals/type",
                    keyword: "type",
                    params: {
                      type: "integer"
                    },
                    message: "must be integer"
                  }];
                  return false;
                }

                if (errors === _errs6) {
                  if (typeof data2 == "number" && isFinite(data2)) {
                    if (data2 > 255 || isNaN(data2)) {
                      validate11.errors = [{
                        instancePath: instancePath + "/decimals",
                        schemaPath: "#/properties/decimals/maximum",
                        keyword: "maximum",
                        params: {
                          comparison: "<=",
                          limit: 255
                        },
                        message: "must be <= 255"
                      }];
                      return false;
                    } else {
                      if (data2 < 0 || isNaN(data2)) {
                        validate11.errors = [{
                          instancePath: instancePath + "/decimals",
                          schemaPath: "#/properties/decimals/minimum",
                          keyword: "minimum",
                          params: {
                            comparison: ">=",
                            limit: 0
                          },
                          message: "must be >= 0"
                        }];
                        return false;
                      }
                    }
                  }
                }

                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }

              if (valid0) {
                if (data.name !== undefined) {
                  var data3 = data.name;
                  var _errs8 = errors;
                  var _errs10 = errors;
                  var valid1 = false;
                  var _errs11 = errors;

                  if ("" !== data3) {
                    var err0 = {
                      instancePath: instancePath + "/name",
                      schemaPath: "#/properties/name/anyOf/0/const",
                      keyword: "const",
                      params: {
                        allowedValue: ""
                      },
                      message: "must be equal to constant"
                    };

                    if (vErrors === null) {
                      vErrors = [err0];
                    } else {
                      vErrors.push(err0);
                    }

                    errors++;
                  }

                  var _valid0 = _errs11 === errors;

                  valid1 = valid1 || _valid0;

                  if (!valid1) {
                    var _errs12 = errors;

                    if (typeof data3 === "string") {
                      if (!pattern2.test(data3)) {
                        var err1 = {
                          instancePath: instancePath + "/name",
                          schemaPath: "#/properties/name/anyOf/1/pattern",
                          keyword: "pattern",
                          params: {
                            pattern: "^[ \\S+]+$"
                          },
                          message: "must match pattern \"" + "^[ \\S+]+$" + "\""
                        };

                        if (vErrors === null) {
                          vErrors = [err1];
                        } else {
                          vErrors.push(err1);
                        }

                        errors++;
                      }
                    }

                    var _valid0 = _errs12 === errors;

                    valid1 = valid1 || _valid0;
                  }

                  if (!valid1) {
                    var err2 = {
                      instancePath: instancePath + "/name",
                      schemaPath: "#/properties/name/anyOf",
                      keyword: "anyOf",
                      params: {},
                      message: "must match a schema in anyOf"
                    };

                    if (vErrors === null) {
                      vErrors = [err2];
                    } else {
                      vErrors.push(err2);
                    }

                    errors++;
                    validate11.errors = vErrors;
                    return false;
                  } else {
                    errors = _errs10;

                    if (vErrors !== null) {
                      if (_errs10) {
                        vErrors.length = _errs10;
                      } else {
                        vErrors = null;
                      }
                    }
                  }

                  if (errors === _errs8) {
                    if (typeof data3 === "string") {
                      if (func2(data3) > 40) {
                        validate11.errors = [{
                          instancePath: instancePath + "/name",
                          schemaPath: "#/properties/name/maxLength",
                          keyword: "maxLength",
                          params: {
                            limit: 40
                          },
                          message: "must NOT have more than 40 characters"
                        }];
                        return false;
                      } else {
                        if (func2(data3) < 0) {
                          validate11.errors = [{
                            instancePath: instancePath + "/name",
                            schemaPath: "#/properties/name/minLength",
                            keyword: "minLength",
                            params: {
                              limit: 0
                            },
                            message: "must NOT have fewer than 0 characters"
                          }];
                          return false;
                        }
                      }
                    } else {
                      validate11.errors = [{
                        instancePath: instancePath + "/name",
                        schemaPath: "#/properties/name/type",
                        keyword: "type",
                        params: {
                          type: "string"
                        },
                        message: "must be string"
                      }];
                      return false;
                    }
                  }

                  var valid0 = _errs8 === errors;
                } else {
                  var valid0 = true;
                }

                if (valid0) {
                  if (data.symbol !== undefined) {
                    var data4 = data.symbol;
                    var _errs13 = errors;
                    var _errs15 = errors;
                    var valid2 = false;
                    var _errs16 = errors;

                    if ("" !== data4) {
                      var err3 = {
                        instancePath: instancePath + "/symbol",
                        schemaPath: "#/properties/symbol/anyOf/0/const",
                        keyword: "const",
                        params: {
                          allowedValue: ""
                        },
                        message: "must be equal to constant"
                      };

                      if (vErrors === null) {
                        vErrors = [err3];
                      } else {
                        vErrors.push(err3);
                      }

                      errors++;
                    }

                    var _valid1 = _errs16 === errors;

                    valid2 = valid2 || _valid1;

                    if (!valid2) {
                      var _errs17 = errors;

                      if (typeof data4 === "string") {
                        if (!pattern3.test(data4)) {
                          var err4 = {
                            instancePath: instancePath + "/symbol",
                            schemaPath: "#/properties/symbol/anyOf/1/pattern",
                            keyword: "pattern",
                            params: {
                              pattern: "^\\S+$"
                            },
                            message: "must match pattern \"" + "^\\S+$" + "\""
                          };

                          if (vErrors === null) {
                            vErrors = [err4];
                          } else {
                            vErrors.push(err4);
                          }

                          errors++;
                        }
                      }

                      var _valid1 = _errs17 === errors;

                      valid2 = valid2 || _valid1;
                    }

                    if (!valid2) {
                      var err5 = {
                        instancePath: instancePath + "/symbol",
                        schemaPath: "#/properties/symbol/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                      };

                      if (vErrors === null) {
                        vErrors = [err5];
                      } else {
                        vErrors.push(err5);
                      }

                      errors++;
                      validate11.errors = vErrors;
                      return false;
                    } else {
                      errors = _errs15;

                      if (vErrors !== null) {
                        if (_errs15) {
                          vErrors.length = _errs15;
                        } else {
                          vErrors = null;
                        }
                      }
                    }

                    if (errors === _errs13) {
                      if (typeof data4 === "string") {
                        if (func2(data4) > 20) {
                          validate11.errors = [{
                            instancePath: instancePath + "/symbol",
                            schemaPath: "#/properties/symbol/maxLength",
                            keyword: "maxLength",
                            params: {
                              limit: 20
                            },
                            message: "must NOT have more than 20 characters"
                          }];
                          return false;
                        } else {
                          if (func2(data4) < 0) {
                            validate11.errors = [{
                              instancePath: instancePath + "/symbol",
                              schemaPath: "#/properties/symbol/minLength",
                              keyword: "minLength",
                              params: {
                                limit: 0
                              },
                              message: "must NOT have fewer than 0 characters"
                            }];
                            return false;
                          }
                        }
                      } else {
                        validate11.errors = [{
                          instancePath: instancePath + "/symbol",
                          schemaPath: "#/properties/symbol/type",
                          keyword: "type",
                          params: {
                            type: "string"
                          },
                          message: "must be string"
                        }];
                        return false;
                      }
                    }

                    var valid0 = _errs13 === errors;
                  } else {
                    var valid0 = true;
                  }

                  if (valid0) {
                    if (data.logoURI !== undefined) {
                      var data5 = data.logoURI;
                      var _errs18 = errors;

                      if (errors === _errs18) {
                        if (errors === _errs18) {
                          if (typeof data5 === "string") {
                            if (!formats2(data5)) {
                              validate11.errors = [{
                                instancePath: instancePath + "/logoURI",
                                schemaPath: "#/properties/logoURI/format",
                                keyword: "format",
                                params: {
                                  format: "uri"
                                },
                                message: "must match format \"" + "uri" + "\""
                              }];
                              return false;
                            }
                          } else {
                            validate11.errors = [{
                              instancePath: instancePath + "/logoURI",
                              schemaPath: "#/properties/logoURI/type",
                              keyword: "type",
                              params: {
                                type: "string"
                              },
                              message: "must be string"
                            }];
                            return false;
                          }
                        }
                      }

                      var valid0 = _errs18 === errors;
                    } else {
                      var valid0 = true;
                    }

                    if (valid0) {
                      if (data.tags !== undefined) {
                        var data6 = data.tags;
                        var _errs20 = errors;

                        if (errors === _errs20) {
                          if (Array.isArray(data6)) {
                            if (data6.length > 10) {
                              validate11.errors = [{
                                instancePath: instancePath + "/tags",
                                schemaPath: "#/properties/tags/maxItems",
                                keyword: "maxItems",
                                params: {
                                  limit: 10
                                },
                                message: "must NOT have more than 10 items"
                              }];
                              return false;
                            } else {
                              var valid3 = true;
                              var len0 = data6.length;

                              for (var i0 = 0; i0 < len0; i0++) {
                                var data7 = data6[i0];
                                var _errs22 = errors;
                                var _errs23 = errors;

                                if (errors === _errs23) {
                                  if (typeof data7 === "string") {
                                    if (func2(data7) > 10) {
                                      validate11.errors = [{
                                        instancePath: instancePath + "/tags/" + i0,
                                        schemaPath: "#/definitions/TagIdentifier/maxLength",
                                        keyword: "maxLength",
                                        params: {
                                          limit: 10
                                        },
                                        message: "must NOT have more than 10 characters"
                                      }];
                                      return false;
                                    } else {
                                      if (func2(data7) < 1) {
                                        validate11.errors = [{
                                          instancePath: instancePath + "/tags/" + i0,
                                          schemaPath: "#/definitions/TagIdentifier/minLength",
                                          keyword: "minLength",
                                          params: {
                                            limit: 1
                                          },
                                          message: "must NOT have fewer than 1 characters"
                                        }];
                                        return false;
                                      } else {
                                        if (!pattern4.test(data7)) {
                                          validate11.errors = [{
                                            instancePath: instancePath + "/tags/" + i0,
                                            schemaPath: "#/definitions/TagIdentifier/pattern",
                                            keyword: "pattern",
                                            params: {
                                              pattern: "^[\\w]+$"
                                            },
                                            message: "must match pattern \"" + "^[\\w]+$" + "\""
                                          }];
                                          return false;
                                        }
                                      }
                                    }
                                  } else {
                                    validate11.errors = [{
                                      instancePath: instancePath + "/tags/" + i0,
                                      schemaPath: "#/definitions/TagIdentifier/type",
                                      keyword: "type",
                                      params: {
                                        type: "string"
                                      },
                                      message: "must be string"
                                    }];
                                    return false;
                                  }
                                }

                                var valid3 = _errs22 === errors;

                                if (!valid3) {
                                  break;
                                }
                              }
                            }
                          } else {
                            validate11.errors = [{
                              instancePath: instancePath + "/tags",
                              schemaPath: "#/properties/tags/type",
                              keyword: "type",
                              params: {
                                type: "array"
                              },
                              message: "must be array"
                            }];
                            return false;
                          }
                        }

                        var valid0 = _errs20 === errors;
                      } else {
                        var valid0 = true;
                      }

                      if (valid0) {
                        if (data.extensions !== undefined) {
                          var _errs25 = errors;

                          if (!validate12(data.extensions, {
                            instancePath: instancePath + "/extensions",
                            parentData: data,
                            parentDataProperty: "extensions",
                            rootData: rootData
                          })) {
                            vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
                            errors = vErrors.length;
                          }

                          var valid0 = _errs25 === errors;
                        } else {
                          var valid0 = true;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate11.errors = [{
        instancePath: instancePath,
        schemaPath: "#/type",
        keyword: "type",
        params: {
          type: "object"
        },
        message: "must be object"
      }];
      return false;
    }
  }

  validate11.errors = vErrors;
  return errors === 0;
}

function validate10(data) {
  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref6$instancePath = _ref6.instancePath,
      instancePath = _ref6$instancePath === void 0 ? "" : _ref6$instancePath;
      _ref6.parentData;
      _ref6.parentDataProperty;
      var _ref6$rootData = _ref6.rootData,
      rootData = _ref6$rootData === void 0 ? data : _ref6$rootData;
  var vErrors = null;
  var errors = 0;

  if (errors === 0) {
    if (data && _typeof(data) == "object" && !Array.isArray(data)) {
      var missing0;

      if (data.name === undefined && (missing0 = "name") || data.timestamp === undefined && (missing0 = "timestamp") || data.version === undefined && (missing0 = "version") || data.tokens === undefined && (missing0 = "tokens")) {
        validate10.errors = [{
          instancePath: instancePath,
          schemaPath: "#/required",
          keyword: "required",
          params: {
            missingProperty: missing0
          },
          message: "must have required property '" + missing0 + "'"
        }];
        return false;
      } else {
        var _errs1 = errors;

        for (var key0 in data) {
          if (!(key0 === "name" || key0 === "timestamp" || key0 === "version" || key0 === "tokens" || key0 === "tokenMap" || key0 === "keywords" || key0 === "tags" || key0 === "logoURI")) {
            validate10.errors = [{
              instancePath: instancePath,
              schemaPath: "#/additionalProperties",
              keyword: "additionalProperties",
              params: {
                additionalProperty: key0
              },
              message: "must NOT have additional properties"
            }];
            return false;
          }
        }

        if (_errs1 === errors) {
          if (data.name !== undefined) {
            var data0 = data.name;
            var _errs2 = errors;

            if (errors === _errs2) {
              if (typeof data0 === "string") {
                if (func2(data0) > 30) {
                  validate10.errors = [{
                    instancePath: instancePath + "/name",
                    schemaPath: "#/properties/name/maxLength",
                    keyword: "maxLength",
                    params: {
                      limit: 30
                    },
                    message: "must NOT have more than 30 characters"
                  }];
                  return false;
                } else {
                  if (func2(data0) < 1) {
                    validate10.errors = [{
                      instancePath: instancePath + "/name",
                      schemaPath: "#/properties/name/minLength",
                      keyword: "minLength",
                      params: {
                        limit: 1
                      },
                      message: "must NOT have fewer than 1 characters"
                    }];
                    return false;
                  } else {
                    if (!pattern0.test(data0)) {
                      validate10.errors = [{
                        instancePath: instancePath + "/name",
                        schemaPath: "#/properties/name/pattern",
                        keyword: "pattern",
                        params: {
                          pattern: "^[\\w ]+$"
                        },
                        message: "must match pattern \"" + "^[\\w ]+$" + "\""
                      }];
                      return false;
                    }
                  }
                }
              } else {
                validate10.errors = [{
                  instancePath: instancePath + "/name",
                  schemaPath: "#/properties/name/type",
                  keyword: "type",
                  params: {
                    type: "string"
                  },
                  message: "must be string"
                }];
                return false;
              }
            }

            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }

          if (valid0) {
            if (data.timestamp !== undefined) {
              var data1 = data.timestamp;
              var _errs4 = errors;

              if (errors === _errs4) {
                if (errors === _errs4) {
                  if (typeof data1 === "string") {
                    if (!formats0.validate(data1)) {
                      validate10.errors = [{
                        instancePath: instancePath + "/timestamp",
                        schemaPath: "#/properties/timestamp/format",
                        keyword: "format",
                        params: {
                          format: "date-time"
                        },
                        message: "must match format \"" + "date-time" + "\""
                      }];
                      return false;
                    }
                  } else {
                    validate10.errors = [{
                      instancePath: instancePath + "/timestamp",
                      schemaPath: "#/properties/timestamp/type",
                      keyword: "type",
                      params: {
                        type: "string"
                      },
                      message: "must be string"
                    }];
                    return false;
                  }
                }
              }

              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }

            if (valid0) {
              if (data.version !== undefined) {
                var data2 = data.version;
                var _errs6 = errors;
                var _errs7 = errors;

                if (errors === _errs7) {
                  if (data2 && _typeof(data2) == "object" && !Array.isArray(data2)) {
                    var missing1;

                    if (data2.major === undefined && (missing1 = "major") || data2.minor === undefined && (missing1 = "minor") || data2.patch === undefined && (missing1 = "patch")) {
                      validate10.errors = [{
                        instancePath: instancePath + "/version",
                        schemaPath: "#/definitions/Version/required",
                        keyword: "required",
                        params: {
                          missingProperty: missing1
                        },
                        message: "must have required property '" + missing1 + "'"
                      }];
                      return false;
                    } else {
                      var _errs9 = errors;

                      for (var key1 in data2) {
                        if (!(key1 === "major" || key1 === "minor" || key1 === "patch")) {
                          validate10.errors = [{
                            instancePath: instancePath + "/version",
                            schemaPath: "#/definitions/Version/additionalProperties",
                            keyword: "additionalProperties",
                            params: {
                              additionalProperty: key1
                            },
                            message: "must NOT have additional properties"
                          }];
                          return false;
                        }
                      }

                      if (_errs9 === errors) {
                        if (data2.major !== undefined) {
                          var data3 = data2.major;
                          var _errs10 = errors;

                          if (!(typeof data3 == "number" && !(data3 % 1) && !isNaN(data3) && isFinite(data3))) {
                            validate10.errors = [{
                              instancePath: instancePath + "/version/major",
                              schemaPath: "#/definitions/Version/properties/major/type",
                              keyword: "type",
                              params: {
                                type: "integer"
                              },
                              message: "must be integer"
                            }];
                            return false;
                          }

                          if (errors === _errs10) {
                            if (typeof data3 == "number" && isFinite(data3)) {
                              if (data3 < 0 || isNaN(data3)) {
                                validate10.errors = [{
                                  instancePath: instancePath + "/version/major",
                                  schemaPath: "#/definitions/Version/properties/major/minimum",
                                  keyword: "minimum",
                                  params: {
                                    comparison: ">=",
                                    limit: 0
                                  },
                                  message: "must be >= 0"
                                }];
                                return false;
                              }
                            }
                          }

                          var valid2 = _errs10 === errors;
                        } else {
                          var valid2 = true;
                        }

                        if (valid2) {
                          if (data2.minor !== undefined) {
                            var data4 = data2.minor;
                            var _errs12 = errors;

                            if (!(typeof data4 == "number" && !(data4 % 1) && !isNaN(data4) && isFinite(data4))) {
                              validate10.errors = [{
                                instancePath: instancePath + "/version/minor",
                                schemaPath: "#/definitions/Version/properties/minor/type",
                                keyword: "type",
                                params: {
                                  type: "integer"
                                },
                                message: "must be integer"
                              }];
                              return false;
                            }

                            if (errors === _errs12) {
                              if (typeof data4 == "number" && isFinite(data4)) {
                                if (data4 < 0 || isNaN(data4)) {
                                  validate10.errors = [{
                                    instancePath: instancePath + "/version/minor",
                                    schemaPath: "#/definitions/Version/properties/minor/minimum",
                                    keyword: "minimum",
                                    params: {
                                      comparison: ">=",
                                      limit: 0
                                    },
                                    message: "must be >= 0"
                                  }];
                                  return false;
                                }
                              }
                            }

                            var valid2 = _errs12 === errors;
                          } else {
                            var valid2 = true;
                          }

                          if (valid2) {
                            if (data2.patch !== undefined) {
                              var data5 = data2.patch;
                              var _errs14 = errors;

                              if (!(typeof data5 == "number" && !(data5 % 1) && !isNaN(data5) && isFinite(data5))) {
                                validate10.errors = [{
                                  instancePath: instancePath + "/version/patch",
                                  schemaPath: "#/definitions/Version/properties/patch/type",
                                  keyword: "type",
                                  params: {
                                    type: "integer"
                                  },
                                  message: "must be integer"
                                }];
                                return false;
                              }

                              if (errors === _errs14) {
                                if (typeof data5 == "number" && isFinite(data5)) {
                                  if (data5 < 0 || isNaN(data5)) {
                                    validate10.errors = [{
                                      instancePath: instancePath + "/version/patch",
                                      schemaPath: "#/definitions/Version/properties/patch/minimum",
                                      keyword: "minimum",
                                      params: {
                                        comparison: ">=",
                                        limit: 0
                                      },
                                      message: "must be >= 0"
                                    }];
                                    return false;
                                  }
                                }
                              }

                              var valid2 = _errs14 === errors;
                            } else {
                              var valid2 = true;
                            }
                          }
                        }
                      }
                    }
                  } else {
                    validate10.errors = [{
                      instancePath: instancePath + "/version",
                      schemaPath: "#/definitions/Version/type",
                      keyword: "type",
                      params: {
                        type: "object"
                      },
                      message: "must be object"
                    }];
                    return false;
                  }
                }

                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }

              if (valid0) {
                if (data.tokens !== undefined) {
                  var data6 = data.tokens;
                  var _errs16 = errors;

                  if (errors === _errs16) {
                    if (Array.isArray(data6)) {
                      if (data6.length > 10000) {
                        validate10.errors = [{
                          instancePath: instancePath + "/tokens",
                          schemaPath: "#/properties/tokens/maxItems",
                          keyword: "maxItems",
                          params: {
                            limit: 10000
                          },
                          message: "must NOT have more than 10000 items"
                        }];
                        return false;
                      } else {
                        if (data6.length < 1) {
                          validate10.errors = [{
                            instancePath: instancePath + "/tokens",
                            schemaPath: "#/properties/tokens/minItems",
                            keyword: "minItems",
                            params: {
                              limit: 1
                            },
                            message: "must NOT have fewer than 1 items"
                          }];
                          return false;
                        } else {
                          var valid3 = true;
                          var len0 = data6.length;

                          for (var i0 = 0; i0 < len0; i0++) {
                            var _errs18 = errors;

                            if (!validate11(data6[i0], {
                              instancePath: instancePath + "/tokens/" + i0,
                              parentData: data6,
                              parentDataProperty: i0,
                              rootData: rootData
                            })) {
                              vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
                              errors = vErrors.length;
                            }

                            var valid3 = _errs18 === errors;

                            if (!valid3) {
                              break;
                            }
                          }
                        }
                      }
                    } else {
                      validate10.errors = [{
                        instancePath: instancePath + "/tokens",
                        schemaPath: "#/properties/tokens/type",
                        keyword: "type",
                        params: {
                          type: "array"
                        },
                        message: "must be array"
                      }];
                      return false;
                    }
                  }

                  var valid0 = _errs16 === errors;
                } else {
                  var valid0 = true;
                }

                if (valid0) {
                  if (data.tokenMap !== undefined) {
                    var data8 = data.tokenMap;
                    var _errs19 = errors;

                    if (errors === _errs19) {
                      if (data8 && _typeof(data8) == "object" && !Array.isArray(data8)) {
                        if (Object.keys(data8).length > 10000) {
                          validate10.errors = [{
                            instancePath: instancePath + "/tokenMap",
                            schemaPath: "#/properties/tokenMap/maxProperties",
                            keyword: "maxProperties",
                            params: {
                              limit: 10000
                            },
                            message: "must NOT have more than 10000 properties"
                          }];
                          return false;
                        } else {
                          if (Object.keys(data8).length < 1) {
                            validate10.errors = [{
                              instancePath: instancePath + "/tokenMap",
                              schemaPath: "#/properties/tokenMap/minProperties",
                              keyword: "minProperties",
                              params: {
                                limit: 1
                              },
                              message: "must NOT have fewer than 1 properties"
                            }];
                            return false;
                          } else {
                            for (var key2 in data8) {
                              var _errs21 = errors;

                              if (typeof key2 !== "string") {
                                var err0 = {
                                  instancePath: instancePath + "/tokenMap",
                                  schemaPath: "#/properties/tokenMap/propertyNames/type",
                                  keyword: "type",
                                  params: {
                                    type: "string"
                                  },
                                  message: "must be string",
                                  propertyName: key2
                                };

                                if (vErrors === null) {
                                  vErrors = [err0];
                                } else {
                                  vErrors.push(err0);
                                }

                                errors++;
                              }

                              var valid4 = _errs21 === errors;

                              if (!valid4) {
                                var err1 = {
                                  instancePath: instancePath + "/tokenMap",
                                  schemaPath: "#/properties/tokenMap/propertyNames",
                                  keyword: "propertyNames",
                                  params: {
                                    propertyName: key2
                                  },
                                  message: "property name must be valid"
                                };

                                if (vErrors === null) {
                                  vErrors = [err1];
                                } else {
                                  vErrors.push(err1);
                                }

                                errors++;
                                validate10.errors = vErrors;
                                return false;
                              }
                            }

                            if (valid4) {
                              for (var key3 in data8) {
                                var _errs24 = errors;

                                if (!validate11(data8[key3], {
                                  instancePath: instancePath + "/tokenMap/" + key3.replace(/~/g, "~0").replace(/\//g, "~1"),
                                  parentData: data8,
                                  parentDataProperty: key3,
                                  rootData: rootData
                                })) {
                                  vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
                                  errors = vErrors.length;
                                }

                                var valid5 = _errs24 === errors;

                                if (!valid5) {
                                  break;
                                }
                              }
                            }
                          }
                        }
                      } else {
                        validate10.errors = [{
                          instancePath: instancePath + "/tokenMap",
                          schemaPath: "#/properties/tokenMap/type",
                          keyword: "type",
                          params: {
                            type: "object"
                          },
                          message: "must be object"
                        }];
                        return false;
                      }
                    }

                    var valid0 = _errs19 === errors;
                  } else {
                    var valid0 = true;
                  }

                  if (valid0) {
                    if (data.keywords !== undefined) {
                      var data10 = data.keywords;
                      var _errs25 = errors;

                      if (errors === _errs25) {
                        if (Array.isArray(data10)) {
                          if (data10.length > 20) {
                            validate10.errors = [{
                              instancePath: instancePath + "/keywords",
                              schemaPath: "#/properties/keywords/maxItems",
                              keyword: "maxItems",
                              params: {
                                limit: 20
                              },
                              message: "must NOT have more than 20 items"
                            }];
                            return false;
                          } else {
                            var valid6 = true;
                            var len1 = data10.length;

                            for (var i1 = 0; i1 < len1; i1++) {
                              var data11 = data10[i1];
                              var _errs27 = errors;

                              if (errors === _errs27) {
                                if (typeof data11 === "string") {
                                  if (func2(data11) > 20) {
                                    validate10.errors = [{
                                      instancePath: instancePath + "/keywords/" + i1,
                                      schemaPath: "#/properties/keywords/items/maxLength",
                                      keyword: "maxLength",
                                      params: {
                                        limit: 20
                                      },
                                      message: "must NOT have more than 20 characters"
                                    }];
                                    return false;
                                  } else {
                                    if (func2(data11) < 1) {
                                      validate10.errors = [{
                                        instancePath: instancePath + "/keywords/" + i1,
                                        schemaPath: "#/properties/keywords/items/minLength",
                                        keyword: "minLength",
                                        params: {
                                          limit: 1
                                        },
                                        message: "must NOT have fewer than 1 characters"
                                      }];
                                      return false;
                                    } else {
                                      if (!pattern0.test(data11)) {
                                        validate10.errors = [{
                                          instancePath: instancePath + "/keywords/" + i1,
                                          schemaPath: "#/properties/keywords/items/pattern",
                                          keyword: "pattern",
                                          params: {
                                            pattern: "^[\\w ]+$"
                                          },
                                          message: "must match pattern \"" + "^[\\w ]+$" + "\""
                                        }];
                                        return false;
                                      }
                                    }
                                  }
                                } else {
                                  validate10.errors = [{
                                    instancePath: instancePath + "/keywords/" + i1,
                                    schemaPath: "#/properties/keywords/items/type",
                                    keyword: "type",
                                    params: {
                                      type: "string"
                                    },
                                    message: "must be string"
                                  }];
                                  return false;
                                }
                              }

                              var valid6 = _errs27 === errors;

                              if (!valid6) {
                                break;
                              }
                            }

                            if (valid6) {
                              var i2 = data10.length;
                              var j0;

                              if (i2 > 1) {
                                var indices0 = {};

                                for (; i2--;) {
                                  var item0 = data10[i2];

                                  if (typeof item0 !== "string") {
                                    continue;
                                  }

                                  if (typeof indices0[item0] == "number") {
                                    j0 = indices0[item0];
                                    validate10.errors = [{
                                      instancePath: instancePath + "/keywords",
                                      schemaPath: "#/properties/keywords/uniqueItems",
                                      keyword: "uniqueItems",
                                      params: {
                                        i: i2,
                                        j: j0
                                      },
                                      message: "must NOT have duplicate items (items ## " + j0 + " and " + i2 + " are identical)"
                                    }];
                                    return false;
                                  }

                                  indices0[item0] = i2;
                                }
                              }
                            }
                          }
                        } else {
                          validate10.errors = [{
                            instancePath: instancePath + "/keywords",
                            schemaPath: "#/properties/keywords/type",
                            keyword: "type",
                            params: {
                              type: "array"
                            },
                            message: "must be array"
                          }];
                          return false;
                        }
                      }

                      var valid0 = _errs25 === errors;
                    } else {
                      var valid0 = true;
                    }

                    if (valid0) {
                      if (data.tags !== undefined) {
                        var data12 = data.tags;
                        var _errs29 = errors;

                        if (errors === _errs29) {
                          if (data12 && _typeof(data12) == "object" && !Array.isArray(data12)) {
                            if (Object.keys(data12).length > 20) {
                              validate10.errors = [{
                                instancePath: instancePath + "/tags",
                                schemaPath: "#/properties/tags/maxProperties",
                                keyword: "maxProperties",
                                params: {
                                  limit: 20
                                },
                                message: "must NOT have more than 20 properties"
                              }];
                              return false;
                            } else {
                              for (var key4 in data12) {
                                var _errs31 = errors;
                                var _errs32 = errors;

                                if (errors === _errs32) {
                                  if (typeof key4 === "string") {
                                    if (func2(key4) > 10) {
                                      var err2 = {
                                        instancePath: instancePath + "/tags",
                                        schemaPath: "#/definitions/TagIdentifier/maxLength",
                                        keyword: "maxLength",
                                        params: {
                                          limit: 10
                                        },
                                        message: "must NOT have more than 10 characters",
                                        propertyName: key4
                                      };

                                      if (vErrors === null) {
                                        vErrors = [err2];
                                      } else {
                                        vErrors.push(err2);
                                      }

                                      errors++;
                                    } else {
                                      if (func2(key4) < 1) {
                                        var err3 = {
                                          instancePath: instancePath + "/tags",
                                          schemaPath: "#/definitions/TagIdentifier/minLength",
                                          keyword: "minLength",
                                          params: {
                                            limit: 1
                                          },
                                          message: "must NOT have fewer than 1 characters",
                                          propertyName: key4
                                        };

                                        if (vErrors === null) {
                                          vErrors = [err3];
                                        } else {
                                          vErrors.push(err3);
                                        }

                                        errors++;
                                      } else {
                                        if (!pattern4.test(key4)) {
                                          var err4 = {
                                            instancePath: instancePath + "/tags",
                                            schemaPath: "#/definitions/TagIdentifier/pattern",
                                            keyword: "pattern",
                                            params: {
                                              pattern: "^[\\w]+$"
                                            },
                                            message: "must match pattern \"" + "^[\\w]+$" + "\"",
                                            propertyName: key4
                                          };

                                          if (vErrors === null) {
                                            vErrors = [err4];
                                          } else {
                                            vErrors.push(err4);
                                          }

                                          errors++;
                                        }
                                      }
                                    }
                                  } else {
                                    var err5 = {
                                      instancePath: instancePath + "/tags",
                                      schemaPath: "#/definitions/TagIdentifier/type",
                                      keyword: "type",
                                      params: {
                                        type: "string"
                                      },
                                      message: "must be string",
                                      propertyName: key4
                                    };

                                    if (vErrors === null) {
                                      vErrors = [err5];
                                    } else {
                                      vErrors.push(err5);
                                    }

                                    errors++;
                                  }
                                }

                                var valid8 = _errs31 === errors;

                                if (!valid8) {
                                  var err6 = {
                                    instancePath: instancePath + "/tags",
                                    schemaPath: "#/properties/tags/propertyNames",
                                    keyword: "propertyNames",
                                    params: {
                                      propertyName: key4
                                    },
                                    message: "property name must be valid"
                                  };

                                  if (vErrors === null) {
                                    vErrors = [err6];
                                  } else {
                                    vErrors.push(err6);
                                  }

                                  errors++;
                                  validate10.errors = vErrors;
                                  return false;
                                }
                              }

                              if (valid8) {
                                for (var key5 in data12) {
                                  var data13 = data12[key5];
                                  var _errs35 = errors;
                                  var _errs36 = errors;

                                  if (errors === _errs36) {
                                    if (data13 && _typeof(data13) == "object" && !Array.isArray(data13)) {
                                      var missing2 = void 0;

                                      if (data13.name === undefined && (missing2 = "name") || data13.description === undefined && (missing2 = "description")) {
                                        validate10.errors = [{
                                          instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1"),
                                          schemaPath: "#/definitions/TagDefinition/required",
                                          keyword: "required",
                                          params: {
                                            missingProperty: missing2
                                          },
                                          message: "must have required property '" + missing2 + "'"
                                        }];
                                        return false;
                                      } else {
                                        var _errs38 = errors;

                                        for (var key6 in data13) {
                                          if (!(key6 === "name" || key6 === "description")) {
                                            validate10.errors = [{
                                              instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1"),
                                              schemaPath: "#/definitions/TagDefinition/additionalProperties",
                                              keyword: "additionalProperties",
                                              params: {
                                                additionalProperty: key6
                                              },
                                              message: "must NOT have additional properties"
                                            }];
                                            return false;
                                          }
                                        }

                                        if (_errs38 === errors) {
                                          if (data13.name !== undefined) {
                                            var data14 = data13.name;
                                            var _errs39 = errors;

                                            if (errors === _errs39) {
                                              if (typeof data14 === "string") {
                                                if (func2(data14) > 20) {
                                                  validate10.errors = [{
                                                    instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                    schemaPath: "#/definitions/TagDefinition/properties/name/maxLength",
                                                    keyword: "maxLength",
                                                    params: {
                                                      limit: 20
                                                    },
                                                    message: "must NOT have more than 20 characters"
                                                  }];
                                                  return false;
                                                } else {
                                                  if (func2(data14) < 1) {
                                                    validate10.errors = [{
                                                      instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                      schemaPath: "#/definitions/TagDefinition/properties/name/minLength",
                                                      keyword: "minLength",
                                                      params: {
                                                        limit: 1
                                                      },
                                                      message: "must NOT have fewer than 1 characters"
                                                    }];
                                                    return false;
                                                  } else {
                                                    if (!pattern10.test(data14)) {
                                                      validate10.errors = [{
                                                        instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                        schemaPath: "#/definitions/TagDefinition/properties/name/pattern",
                                                        keyword: "pattern",
                                                        params: {
                                                          pattern: "^[ \\w]+$"
                                                        },
                                                        message: "must match pattern \"" + "^[ \\w]+$" + "\""
                                                      }];
                                                      return false;
                                                    }
                                                  }
                                                }
                                              } else {
                                                validate10.errors = [{
                                                  instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                  schemaPath: "#/definitions/TagDefinition/properties/name/type",
                                                  keyword: "type",
                                                  params: {
                                                    type: "string"
                                                  },
                                                  message: "must be string"
                                                }];
                                                return false;
                                              }
                                            }

                                            var valid12 = _errs39 === errors;
                                          } else {
                                            var valid12 = true;
                                          }

                                          if (valid12) {
                                            if (data13.description !== undefined) {
                                              var data15 = data13.description;
                                              var _errs41 = errors;

                                              if (errors === _errs41) {
                                                if (typeof data15 === "string") {
                                                  if (func2(data15) > 200) {
                                                    validate10.errors = [{
                                                      instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                      schemaPath: "#/definitions/TagDefinition/properties/description/maxLength",
                                                      keyword: "maxLength",
                                                      params: {
                                                        limit: 200
                                                      },
                                                      message: "must NOT have more than 200 characters"
                                                    }];
                                                    return false;
                                                  } else {
                                                    if (func2(data15) < 1) {
                                                      validate10.errors = [{
                                                        instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                        schemaPath: "#/definitions/TagDefinition/properties/description/minLength",
                                                        keyword: "minLength",
                                                        params: {
                                                          limit: 1
                                                        },
                                                        message: "must NOT have fewer than 1 characters"
                                                      }];
                                                      return false;
                                                    } else {
                                                      if (!pattern11.test(data15)) {
                                                        validate10.errors = [{
                                                          instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                          schemaPath: "#/definitions/TagDefinition/properties/description/pattern",
                                                          keyword: "pattern",
                                                          params: {
                                                            pattern: "^[ \\w\\.,:]+$"
                                                          },
                                                          message: "must match pattern \"" + "^[ \\w\\.,:]+$" + "\""
                                                        }];
                                                        return false;
                                                      }
                                                    }
                                                  }
                                                } else {
                                                  validate10.errors = [{
                                                    instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                    schemaPath: "#/definitions/TagDefinition/properties/description/type",
                                                    keyword: "type",
                                                    params: {
                                                      type: "string"
                                                    },
                                                    message: "must be string"
                                                  }];
                                                  return false;
                                                }
                                              }

                                              var valid12 = _errs41 === errors;
                                            } else {
                                              var valid12 = true;
                                            }
                                          }
                                        }
                                      }
                                    } else {
                                      validate10.errors = [{
                                        instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1"),
                                        schemaPath: "#/definitions/TagDefinition/type",
                                        keyword: "type",
                                        params: {
                                          type: "object"
                                        },
                                        message: "must be object"
                                      }];
                                      return false;
                                    }
                                  }

                                  var valid10 = _errs35 === errors;

                                  if (!valid10) {
                                    break;
                                  }
                                }
                              }
                            }
                          } else {
                            validate10.errors = [{
                              instancePath: instancePath + "/tags",
                              schemaPath: "#/properties/tags/type",
                              keyword: "type",
                              params: {
                                type: "object"
                              },
                              message: "must be object"
                            }];
                            return false;
                          }
                        }

                        var valid0 = _errs29 === errors;
                      } else {
                        var valid0 = true;
                      }

                      if (valid0) {
                        if (data.logoURI !== undefined) {
                          var data16 = data.logoURI;
                          var _errs43 = errors;

                          if (errors === _errs43) {
                            if (errors === _errs43) {
                              if (typeof data16 === "string") {
                                if (!formats2(data16)) {
                                  validate10.errors = [{
                                    instancePath: instancePath + "/logoURI",
                                    schemaPath: "#/properties/logoURI/format",
                                    keyword: "format",
                                    params: {
                                      format: "uri"
                                    },
                                    message: "must match format \"" + "uri" + "\""
                                  }];
                                  return false;
                                }
                              } else {
                                validate10.errors = [{
                                  instancePath: instancePath + "/logoURI",
                                  schemaPath: "#/properties/logoURI/type",
                                  keyword: "type",
                                  params: {
                                    type: "string"
                                  },
                                  message: "must be string"
                                }];
                                return false;
                              }
                            }
                          }

                          var valid0 = _errs43 === errors;
                        } else {
                          var valid0 = true;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate10.errors = [{
        instancePath: instancePath,
        schemaPath: "#/type",
        keyword: "type",
        params: {
          type: "object"
        },
        message: "must be object"
      }];
      return false;
    }
  }

  validate10.errors = vErrors;
  return errors === 0;
}

export { validate10 as default, validate };
