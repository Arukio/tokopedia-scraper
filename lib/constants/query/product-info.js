export const PRODUCT_INFO_QUERY = `
fragment ProductVariant on pdpDataProductVariant {
  errorCode
  parentID
  defaultChild
  sizeChart
  variants {
    productVariantID
    variantID
    name
    identifier
    option {
      picture {
        url
        url100
      }
      productVariantOptionID
      variantUnitValueID
      value
      hex
    }
  }
  children {
    productID
    price
    priceFmt
    sku
    optionID
    productName
    productURL
    picture {
      url
      url100
    }
    stock {
      stock
      isBuyable
      stockWording
      stockWordingHTML
      minimumOrder
      maximumOrder
    }
    isCOD
    isWishlist
    campaignInfo {
      campaignID
      campaignType
      campaignTypeName
      discountPercentage
      originalPrice
      discountPrice
      stock
      stockSoldPercentage
      threshold
      startDate
      endDate
      endDateUnix
      appLinks
      isAppsOnly
      isActive
      hideGimmick
      minOrder
      campaignIdentifier
      background
      paymentInfoWording
    }
    thematicCampaign {
      additionalInfo
      background
      campaignName
      icon
    }
  }
}

fragment ProductMedia on pdpDataProductMedia {
  media {
    type
    suffix
    prefix
    urlOriginal: URLOriginal
    videoUrl: videoURLAndroid
    description
  }
  videos {
    source
    url
  }
}

fragment ProductUpcomingCampaign on pdpDataUpcomingCampaign {
  campaignID
  campaignType
  campaignTypeName
  startDate
  endDate
  notifyMe
  ribbonCopy
  upcomingType
}

fragment ProductHighlight on pdpDataProductContent {
  name
  price {
    value
    currency
  }
  campaign {
    campaignID
    campaignType
    campaignTypeName
    percentageAmount
    originalPrice
    discountedPrice
    originalStock
    stock
    stockSoldPercentage
    threshold
    startDate
    endDate
    endDateUnix
    appLinks
    isAppsOnly
    isActive
    hideGimmick
    campaignIdentifier
    background
    paymentInfoWording
  }
  thematicCampaign {
    additionalInfo
    background
    campaignName
    icon
  }
  stock {
    useStock
    value
    stockWording
  }
  variant {
    isVariant
    parentID
  }
  wholesale {
    minQty
    price {
      value
      currency
    }
  }
  isCashback {
    percentage
  }
  isFreeOngkir {
    isActive
    imageURL
  }
  isOS
  isPowerMerchant
  isWishlist
  isCOD
  preorder {
    duration
    timeUnit
    isActive
    preorderInDays
  }
}

fragment ProductCustomInfo on pdpDataCustomInfo {
  icon
  title
  isApplink
  applink
  separator
  description
}

fragment ProductInfo on pdpDataProductInfo {
  row
  content {
    title
    subtitle
    applink
  }
}

fragment ProductDataInfo on pdpDataInfo {
  icon
  title
  isApplink
  applink
  content {
    icon
    text
  }
}

fragment ProductSocial on pdpDataSocialProof {
  row
  content {
    icon
    title
    subtitle
    applink
    type
    rating
  }
}

fragment ProductOneLiner on pdpDataOneLiner {
  productID
  oneLinerContent
  color
  linkText
  applink
  separator
  icon
  isVisible
}

fragment ProductDetail on pdpDataProductDetail {
  content {
    title
    subtitle
    applink
    showAtFront
    isAnnotation
  }
}

query PDPGetLayoutQuery($shopDomain: String, $productKey: String, $layoutID: String, $apiVersion: Float, $userLocation: pdpUserLocation) {
  pdpGetLayout(shopDomain: $shopDomain, productKey: $productKey, layoutID: $layoutID, apiVersion: $apiVersion, userLocation: $userLocation) {
    name
    pdpSession
    basicInfo {
      alias
      id: productID
      isTokoNow
      shopID
      shopName
      minOrder
      maxOrder
      weight
      weightUnit
      condition
      status
      url
      sku
      gtin
      isMustInsurance
      needPrescription
      catalogID
      isLeasing
      isBlacklisted
      totalStockFmt
      menu {
        id
        name
        url
      }
      category {
        id
        name
        title
        breadcrumbURL
        isAdult
        detail {
          id
          name
          breadcrumbURL
          isAdult
        }
      }
      blacklistMessage {
        title
        description
        button
        url
      }
      txStats {
        transactionSuccess
        transactionReject
        countSold
        paymentVerified
        itemSoldPaymentVerified
      }
      stats {
        countView
        countReview
        countTalk
        rating
      }
    }
    components {
      name
      type
      data {
        ...ProductMedia
        ...ProductHighlight
        ...ProductInfo
        ...ProductSocial
        ...ProductDataInfo
        ...ProductUpcomingCampaign
        ...ProductCustomInfo
        ...ProductDetail
        ...ProductVariant
        ...ProductOneLiner
      }
    }
  }
}
`;
