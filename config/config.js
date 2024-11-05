// config/config.js

export const API_DOMAIN = 'https://api.foxy.in';
export const LISTS_API_VERSION = 'v7';


export const SEND_OTP= `${API_DOMAIN}/api/v2/users/send_otp`;
export const SEND_OTP_ON_WHATSAPP= `${API_DOMAIN}/api/v2/users/send_otp`;
export const VERIFY_OTP= `${API_DOMAIN}/api/v2/users/verify.json`;
export const ADD_PROFILE_DETAILS= `${API_DOMAIN}/api/v2/users/profile`;
export const SEARCH_PRODUCT= `${API_DOMAIN}/api/v1/products/search.json?q=`;
export const AUTO_SUGGEST= `${API_DOMAIN}/api/v4/autosuggest?q=`;
export const BRANDS= `${API_DOMAIN}/api/v1/brands?page=`;
export const PRODUCT_V2= `${API_DOMAIN}/api/v2/products/`;
export const USER_ATTRIBUTES= `${API_DOMAIN}/api/v1/user_attributes`;
export const PIN_CODE= `${API_DOMAIN}/api/v1/my_pincode`;
export const OFFER_PROMPTS= `${API_DOMAIN}/api/v1/offers/`;
export const CART_PROMPTS= `${API_DOMAIN}/api/v1/carts/prompts`;
export const OFFERS_PROMPTS= `${API_DOMAIN}/api/v1/offers/all_prompts`;
export const GET_CART_PRICING= `${API_DOMAIN}/api/v1/carts/pricing`;
export const TODAY_DEALS= `${API_DOMAIN}/api/v1/flash-deals`;
export const BOOSTED_OFFERS= `${API_DOMAIN}/api/v7/offers/boosted_sku_offers`;
export const ROUTINE_URL= `${API_DOMAIN}/api/v2/routines`;
export const ROUTINE_LIST= `${API_DOMAIN}/api/v1/routines`;
export const PRO_ACCOUNT_LINKS= `${API_DOMAIN}/api/v1/pro_accounts/links`;
export const VERIFY_ONELINK= `${API_DOMAIN}/api/v1/pro_accounts/verify_onelink`;
export const TOP_BRANDS= `${API_DOMAIN}/api/v1/brands/top-brands`;
export const HOME_PAGE_SLUG = `${API_DOMAIN}/api/${LISTS_API_VERSION}/lists/home-page.json?Nan=Nan&page=0&hide_oos=false&user_attributes[7][]=10&user_attributes[8][]=135&user_attributes[28][]=62&user_attributes[3][]=165&user_attributes[19][]=149&user_attributes[1][]=212&user_attributes[17][]=25&user_attributes[18][]=223&user_attributes[30][]=194&user_attributes[9][]=106&user_attributes[6][]=76&user_attributes[2][]=213&user_attributes[33][]=45&user_attributes[40][]=269&user_attributes[41][]=274&user_attributes[46][]=279&app_version=10.8.5&show_special_offer=true&build_number=web1085&use_modified_product_list=false`;
export const CATEGORY_BROWSING_TAB_SLUG = `/api/${LISTS_API_VERSION}/lists/categories-page`;
export const ROUTINES_TAB_SLUG = `${API_DOMAIN}/api/${LISTS_API_VERSION}/lists/routines`;
export const SEARCH_URL = `${API_DOMAIN}/api/${LISTS_API_VERSION}/search.json`;
export const SEARCH_AUTOCOMPLETE = `${API_DOMAIN}/api/v0/autocomplete`;
export const SEARCH_AUTOSUGGEST = `${API_DOMAIN}/api/v8/autosuggest`;
export const EMPTY_SEARCH_URL = `${API_DOMAIN}/api/${LISTS_API_VERSION}/empty-search`;
export const PRODUCT_DETAIL_URL = `${API_DOMAIN}`;
export const ORDER_URL = `${API_DOMAIN}/api/v1/orders`;