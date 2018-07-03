const HOST = window.location.hostname
let URL = ''

if (HOST === 'localhost' || HOST === 'workers-testweb.mt-square.com') {
    URL = 'workers-testapi.mt-square.com/api'
} else if (HOST === 'workers-stweb.mt-square.com') {
    URL = 'workers-stapi.mt-square.com/api'
} else {
    URL = 'workers-api.mt-square.com/api'
}

export const API_DOMEIN = URL

export const KEY_CODE_ENTER = 13
