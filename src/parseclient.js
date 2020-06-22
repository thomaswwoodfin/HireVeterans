/*
* Created by Thomas
* */


import {config} from './config';
import {AsyncStorage} from 'react-native'
import Parse from "parse/react-native";

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(config.parseappid, config.parseappkey);
//Parse.javaScriptKey = config.parseappkey;
Parse.serverURL = config.parseurl;

const User = Parse.Object.extend("User")
const Events = Parse.Object.extend("EventManager")
const Brands = Parse.Object.extend("Brands")
const EventTypes = Parse.Object.extend("EventTypes")
const Distributors = Parse.Object.extend("Distributors")
const Venues = Parse.Object.extend("Venues")
const JobTitles = Parse.Object.extend("JobTitles")
const Responsibilities = Parse.Object.extend("Responsibilities")
const Uniforms = Parse.Object.extend("Uniforms")
const staffManager = Parse.Object.extend("staffManager")
const Models = Parse.Object.extend("Models")
const Reports = Parse.Object.extend("Reports")

export const userLogin = (username, password) => {
    return Parse.User.logIn(username, password)
}

export const getUsers = (single) => {
    const query = new Parse.Query(User);

    if (single) {
        query.equalTo(single.where, single.is);

        if (single.select) {
            query.select(single.select)
        }

        return query.first({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    else {
        return query.find({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}

export const getUserspecific = (single) => {
    const query = new Parse.Query(User);

    query.equalTo(single.where, single.is);
    query.select("objectId", "username", "email", "firstName", "lastName", "reporter")

    return query.first({
        success: function (results) {
            return results;
        },
        error: function (error) {
            console.log(error);
        }
    });
}

export const deleteUser = (id) => {
    const query = new Parse.Query(User);

    query.equalTo("objectId", id);
    query.first({
        success: function (event) {
            event.destroy({
                success: function (response) {
                    return response
                },
                error: function (response, error) {
                    return error
                }
            });
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
            return null;
        }
    });
}

export const getEvents = (single) => {
    const query = new Parse.Query(Events);
    if (single) {
        query.equalTo(single.where, single.is);
        return query.first({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    else {
        query.descending("eventDate");
        return query.find({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}


export const getEventpecific = (single) => {
    const query = new Parse.Query(Events);

    query.equalTo(single.where, single.is);

    return query.first({
        success: function (results) {
            return results;
        },
        error: function (error) {
            console.log(error);
        }
    });
}


export const createEvent = (data) => {

    if (data) {
        const newevent = new Events();

        for (var x in data) {
            newevent.set(x, data[x]);
        }

        return newevent.save(null, {
            success: function (event) {
                return event
            },
            error: function (response, error) {
                console.log('Error: ' + error.message);
            }
        });
    }
}

export const deleteEvent = (id) => {
    const query = new Parse.Query('EventManager');

    query.equalTo("objectId", id);
    query.first({
        success: function (event) {
            event.destroy({
                success: function (response) {
                    return response
                },
                error: function (response, error) {
                    return error
                }
            });
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
            return null;
        }
    });
}

export const getEventTypes = (single) => {
    const query = new Parse.Query(EventTypes);

    if (single) {
        query.equalTo(single.where, single.is);
        return query.first({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    else {
        return query.find({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}


export const createEventType = (data) => {

    if (data) {
        const newEventType = new EventTypes();

        for (var x in data) {
            newEventType.set(x, data[x]);
        }

        return newEventType.save(null, {
            success: function (jobTitle) {
                return jobTitle
            },
            error: function (response, error) {
                console.log('Error: ' + error.message);
            }
        });
    }
}


export const getBrands = (single) => {
    const query = new Parse.Query(Brands);

    if (single) {
        query.equalTo(single.where, single.is);
        return query.first({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    else {
        return query.find({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}

export const createBrand = (data) => {
    const brand = new Brands();

    brand.set("brandName", data.brnadname);
    brand.set("creatorId", config.currentUser.objectId);

    const fname = Math.floor(Math.random() * 20);
    var parseFile = new Parse.File(fname, data.file);
    brand.set("brandImage", parseFile);

    return brand.save(null, {
        success: function (event) {
            return event
        },
        error: function (response, error) {
            console.log('Error: ' + error.message);
        }
    });
}

export const deleteBrand = (id) => {
    const query = new Parse.Query(Brands);

    query.equalTo("objectId", id);
    query.first({
        success: function (event) {
            if (event) {
                return event.destroy({
                    success: function (response) {
                        return response
                    },
                    error: function (response, error) {
                        return error
                    }
                })
            } else {
                return null;
            }
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
            return null;
        }
    });
}

export const getDistributors = (single) => {
    const query = new Parse.Query(Distributors);

    if (single) {
        query.equalTo(single.where, single.is);
        return query.first({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    else {
        return query.find({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}

export const createDistributor = (data) => {
    const distributor = new Distributors();

    distributor.set("name", data.name);
    distributor.set("creatorId", config.currentUser.objectId);

    const fname = Math.floor(Math.random() * 20);
    var parseFile = new Parse.File(fname, data.file);
    distributor.set("image", parseFile);

    return distributor.save(null, {
        success: function (event) {
            return event
        },
        error: function (response, error) {
            console.log('Error: ' + error.message);
        }
    });
}

export const deleteDistributor = (id) => {
    const query = new Parse.Query(Distributors);

    query.equalTo("objectId", id);
    query.first({
        success: function (event) {
            if (event) {
                return event.destroy({
                    success: function (response) {
                        return response
                    },
                    error: function (response, error) {
                        return error
                    }
                })
            } else {
                return null;
            }
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
            return null;
        }
    });
}

export const getVenues = (single) => {
    const query = new Parse.Query(Venues);

    if (single) {
        query.equalTo(single.where, single.is);
        return query.first({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    else {
        return query.find({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}

export const createVenue = (data) => {
    const venue = new Venues();

    venue.set("name", data.name);
    venue.set("creatorId", config.currentUser.objectId);

    const fname = Math.floor(Math.random() * 20);
    var parseFile = new Parse.File(fname, data.file);
    venue.set("image", parseFile);

    return venue.save(null, {
        success: function (event) {
            return event
        },
        error: function (response, error) {
            console.log('Error: ' + error.message);
        }
    });
}

export const deleteVenue = (id) => {
    const query = new Parse.Query(Venues);

    query.equalTo("objectId", id);
    query.first({
        success: function (event) {
            if (event) {
                return event.destroy({
                    success: function (response) {
                        return response
                    },
                    error: function (response, error) {
                        return error
                    }
                })
            } else {
                return null;
            }
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
            return null;
        }
    });
}

export const getJobTitles = (single) => {
    const query = new Parse.Query(JobTitles);

    if (single) {
        query.equalTo(single.where, single.is);
        return query.first({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    else {
        return query.find({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}

export const createJobTitle = (data) => {

    if (data) {
        const newjobTitle = new JobTitles();

        for (var x in data) {
            newjobTitle.set(x, data[x]);
        }

        return newjobTitle.save(null, {
            success: function (jobTitle) {
                return jobTitle
            },
            error: function (response, error) {
                console.log('Error: ' + error.message);
            }
        });
    }
}

export const deleteJobTitle = (id) => {
    const query = new Parse.Query(JobTitles);

    query.equalTo("objectId", id);
    query.first({
        success: function (event) {
            event.destroy({
                success: function (response) {
                    return response
                },
                error: function (response, error) {
                    return error
                }
            });
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
            return null;
        }
    });
}

export const createResponsibilities = (data) => {

    if (data) {
        const responsibility = new Responsibilities();

        for (var x in data) {
            responsibility.set(x, data[x]);
        }

        return responsibility.save(null, {
            success: function (event) {
                return event
            },
            error: function (response, error) {
                console.log('Error: ' + error.message);
            }
        });
    }
}

export const deleteResponsibility = (id) => {
    const query = new Parse.Query(Responsibilities);

    query.equalTo("objectId", id);
    query.first({
        success: function (event) {
            event.destroy({
                success: function (response) {
                    return response
                },
                error: function (response, error) {
                    return error
                }
            });
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
            return null;
        }
    });
}

export const getResponsibilities = (single) => {
    const query = new Parse.Query(Responsibilities);

    if (single) {
        query.equalTo(single.where, single.is);
        return query.first({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    else {
        return query.find({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}


export const createUniform = (data) => {

    if (data) {
        const newevent = new Uniforms();

        for (var x in data) {
            newevent.set(x, data[x]);
        }

        return newevent.save(null, {
            success: function (event) {
                return event
            },
            error: function (response, error) {
                console.log('Error: ' + error.message);
            }
        });
    }
}


export const getUniforms = (single) => {
    const query = new Parse.Query(Uniforms);

    if (single) {
        query.equalTo(single.where, single.is);
        return query.first({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    else {
        return query.find({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}

export const deleteUniform = (id) => {
    const query = new Parse.Query(Uniforms);

    query.equalTo("objectId", id);
    query.first({
        success: function (event) {
            event.destroy({
                success: function (response) {
                    return response
                },
                error: function (response, error) {
                    return error
                }
            });
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
            return null;
        }
    });
}

export const getStaffs = (single) => {
    const query = new Parse.Query(staffManager);

    if (single) {
        query.equalTo(single.where, single.is);
        return query.first({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    else {
        query.equalTo("eventObjectId", User);
        query.include("User");
        return query.find({
            success: function (results) {
                var aptalent = new Array();
                for (var i in results) {
                    var obj = results[i];

                    console.log(obj.get("username"))
                }

                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}

export const getStaffsClient = (single) => {
    let query = new Parse.Query(staffManager);

    if (single) {
        query.equalTo(single.where, single.is);
        return query.first({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    else {
        query.descending("createdAt");
        query.include('User')
        return query.find({
            success: function (results) {
                return results;

            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}


export const deleteStaff = (id) => {
    const query = new Parse.Query(staffManager);

    query.equalTo("objectId", id);
    query.first({
        success: function (event) {
            event.destroy({
                success: function (response) {
                    return response
                },
                error: function (response, error) {
                    return error
                }
            });
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
            return null;
        }
    });
}


export const RegisterUser = (data) => {
    if (data) {
        const newUser = new User();

        for (var x in data) {
            newUser.set(x, data[x]);
        }

        return newUser.save(null, {
            success: function (user) {
                return user
            },
            error: function (response, error) {
                console.log('Error: ' + error.message);
            }
        });
    }
}

export const addModel = (data) => {
    const model = new Models();
    const images = data.modelimages
    delete data['modelimages'];

    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        model.set(data[i], data[i]);
    }

    images.map((item, index) => {
        const fname = Math.floor(Math.random() * 20);
        var parseFile = new Parse.File(fname, item);
        model.set(`image${index}`, parseFile);
    })


    return model.save(null, {
        success: function (event) {
            return event
        },
        error: function (response, error) {
            console.log('Error: ' + error.message);
        }
    });
}


export const getReports = (single) => {
    let query = new Parse.Query(Reports);

    if (single) {
        query.equalTo(single.where, single.is);
        return query.first({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    else {
        query.descending("createdAt");
        return query.find({
            success: function (results) {
                return results;

            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}


export const getModels = (single) => {
    const query = new Parse.Query(User);

    if (single) {
        query.equalTo(single.where, single.is);
        query.equalTo('usertype', "TALENT");
        return query.first({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    else {
        query.equalTo('usertype', "TALENT");
        query.descending("createdAt");
        return query.find({
            success: function (results) {
                return results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}


export const deleteModel = (id) => {
    const query = new Parse.Query(User);

    query.equalTo("objectId", id);
    query.first({
        success: function (event) {
            event.destroy({
                success: function (response) {
                    return response
                },
                error: function (response, error) {
                    return error
                }
            });
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
            return null;
        }
    });
}


// register model

export const registermodel = (data) => {

    if (data) {
        const newmodel = new User();

        for (var x in data) {
            newmodel.set(x, data[x]);
        }

        return newmodel.save(null, {
            success: function (modeldata) {
                return modeldata
            },
            error: function (response, error) {
                console.log('Error: ' + error.message);
            }
        });
    }
}
