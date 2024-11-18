import{d as h,t as i,J as k,A as u,K as o,x as t,L as M,M as V,N as U,O as B,r as x,i as w,o as D,P as R,v as m,y as n,z as a,B as p,Q as j,R as S,_ as Q}from"./-NZt-jga.js";import{q as z,R as I,j as _}from"./uVNfbozL.js";import{m as T,N as Y}from"./DXVSTp87.js";import{g as A}from"./BS4WOckm.js";const J=t("path",{d:"m10.6 13.8-2.175-2.175a.92.92 0 0 0-.675-.275q-.4 0-.7.3a.95.95 0 0 0-.275.7q0 .425.275.7L9.9 15.9a.95.95 0 0 0 .7.275.95.95 0 0 0 .7-.275l5.675-5.675a.92.92 0 0 0 .275-.675q0-.4-.3-.7a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275zM12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.138A9.7 9.7 0 0 1 12 2q2.075 0 3.9.787a10.1 10.1 0 0 1 3.175 2.138q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22"},null,-1),O=h({__name:"SfIconCheckCircle",props:{size:{type:String,default:z.base}},setup(d){return(s,l)=>(i(),k(o(T),{size:d.size,viewBox:"0 0 24 24","data-testid":"check-circle"},{default:u(()=>[J]),_:1},8,["size"]))}}),K=t("path",{d:"M18.295 5.705a1 1 0 0 1 0 1.41L13.41 12l4.885 4.885a.997.997 0 1 1-1.41 1.41L12 13.41l-4.885 4.885a.997.997 0 1 1-1.41-1.41L10.59 12 5.705 7.115a.997.997 0 0 1 1.41-1.41L12 10.59l4.885-4.885a.997.997 0 0 1 1.41 0"},null,-1),v=h({__name:"SfIconClose",props:{size:{type:String,default:z.base}},setup(d){return(s,l)=>(i(),k(o(T),{size:d.size,viewBox:"0 0 24 24","data-testid":"close"},{default:u(()=>[K]),_:1},8,["size"]))}}),W={[I.primary]:"text-primary-700 underline hover:text-primary-800 active:text-primary-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm",[I.secondary]:"underline hover:text-primary-800 active:text-primary-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"},q=h({__name:"SfLink",props:{tag:{type:[String,Object],default:"a"},variant:{type:String,default:I.primary}},setup(d){return(s,l)=>(i(),k(U(d.tag),{class:V(["focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm",W[d.variant]]),"data-testid":"link"},{default:u(()=>[M(s.$slots,"default")]),_:3},8,["class"]))}}),G={class:"md:shadow-lg md:rounded-md md:border md:border-neutral-100"},H={class:"flex justify-between items-end bg-neutral-100 md:bg-transparent py-2 px-4 md:px-6 md:pt-6 md:pb-4"},X={class:"typography-text-base font-medium"},Z={class:"px-4 pb-4 mt-3 md:px-6 md:pb-6 md:mt-0"},ee={class:"flex justify-between typography-text-base pb-4"},te={class:"flex flex-col text-right"},oe={class:"typography-text-xs text-neutral-500"},ae={class:"typography-text-xs text-secondary-700"},se={class:"my-2"},re={key:0,class:"flex items-center mb-5 py-5 border-y border-neutral-200"},ie={class:"px-3 py-1.5 bg-secondary-100 text-secondary-700 typography-text-sm rounded-md text-center mb-4"},le={class:"flex justify-between typography-headline-4 md:typography-headline-3 font-bold pb-4 mb-4 border-b border-neutral-200"},ne={class:"typography-text-sm mt-4 text-center"},de={class:"absolute top-0 right-0 mx-2 mt-2 sm:mr-6"},ue={key:0,role:"alert",class:"flex items-start md:items-center shadow-md max-w-[600px] bg-positive-100 pr-2 pl-4 mb-2 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md"},ce={key:1,role:"alert",class:"flex items-start md:items-center shadow-md max-w-[600px] bg-positive-100 pr-2 pl-4 mb-2 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md"},pe={key:2,role:"alert",class:"flex items-start md:items-center max-w-[600px] shadow-md bg-negative-100 pr-2 pl-4 ring-1 ring-negative-300 typography-text-sm md:typography-text-base py-1 rounded-md"},me=h({__name:"OrderSummary",setup(d){B();const s=x(""),l=x(!1),b=x(!1),f=x(!1),r={items:3,originalPrice:7824.97,savings:-787,delivery:0,tax:457.47},y=x(0),P=w(()=>r.originalPrice+r.savings+r.delivery+r.tax),E=w(()=>P.value+y.value),F=()=>{y.value===-100&&s.value.toUpperCase()==="VSF2020"||!s.value||(s.value.toUpperCase()==="VSF2020"?(y.value=-100,b.value=!0,setTimeout(()=>b.value=!1,5e3)):(f.value=!0,setTimeout(()=>f.value=!1,5e3)))},L=()=>{y.value=0,l.value=!0,setTimeout(()=>l.value=!1,5e3)},c=g=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(g);A`
query getCart {
  site {
    cart {
      entityId
      currencyCode
      isTaxIncluded
      baseAmount {
        currencyCode
        value
      }
      discountedAmount {
        currencyCode
        value
      }
      amount {
        currencyCode
        value
      }
      discounts {
        entityId
        discountedAmount {
          currencyCode
          value
        }
      }
      lineItems {
        physicalItems {
          entityId
          parentEntityId
          variantEntityId
          productEntityId
          sku
          name
          url
          imageUrl
          brand
          quantity
          isTaxable
          discounts {
            entityId
            discountedAmount {
              currencyCode
              value
            }
          }
          discountedAmount {
            currencyCode
            value
          }
          couponAmount {
            currencyCode
            value
          }
          listPrice {
            currencyCode
            value
          }
          originalPrice {
            currencyCode
            value
          }
          salePrice {
            currencyCode
            value
          }
          extendedListPrice {
            currencyCode
            value
          }
          extendedSalePrice {
            currencyCode
            value
          }
          isShippingRequired
          selectedOptions {
            entityId
            name
            ... on CartSelectedCheckboxOption {
              value
              valueEntityId
            }
            ... on CartSelectedDateFieldOption {
              date {
                utc
              }
            }
            ... on CartSelectedFileUploadOption {
              fileName
            }
            ... on CartSelectedMultiLineTextFieldOption {
              text
            }
            ... on CartSelectedMultipleChoiceOption {
              value
              valueEntityId
            }
            ... on CartSelectedNumberFieldOption {
              number
            }
            ... on CartSelectedTextFieldOption {
              text
            }
          }
          giftWrapping {
            name
            amount {
              currencyCode
              value
            }
            message
          }
        }
        digitalItems {
          entityId
          parentEntityId
          variantEntityId
          productEntityId
          sku
          name
          url
          imageUrl
          brand
          quantity
          isTaxable
          discounts {
            entityId
            discountedAmount {
              currencyCode
              value
            }
          }
          discountedAmount {
            currencyCode
            value
          }
          couponAmount {
            currencyCode
            value
          }
          listPrice {
            currencyCode
            value
          }
          originalPrice {
            currencyCode
            value
          }
          salePrice {
            currencyCode
            value
          }
          extendedListPrice {
            currencyCode
            value
          }
          extendedSalePrice {
            currencyCode
            value
          }
          selectedOptions {
            entityId
            name
            ... on CartSelectedCheckboxOption {
              value
              valueEntityId
            }
            ... on CartSelectedDateFieldOption {
              date {
                utc
              }
            }
            ... on CartSelectedFileUploadOption {
              fileName
            }
            ... on CartSelectedMultiLineTextFieldOption {
              text
            }
            ... on CartSelectedMultipleChoiceOption {
              value
              valueEntityId
            }
            ... on CartSelectedNumberFieldOption {
              number
            }
            ... on CartSelectedTextFieldOption {
              text
            }
          }
        }
        giftCertificates {
          entityId
          name
          theme
          amount {
            currencyCode
            value
          }
          isTaxable
          sender {
            name
            email
          }
          recipient {
            name
            email
          }
          message
        }
        customItems {
          entityId
          sku
          name
          quantity
          listPrice {
            currencyCode
            value
          }
          extendedListPrice {
            currencyCode
            value
          }
        }
        totalQuantity
      }
      createdAt {
        utc
      }
      updatedAt {
        utc
      }
      locale
    }
  }
}
`;const $=A`
query getCart ($id: String!) {
  site {
    cart (entityId: $id) {
      entityId
    }
  }
}
`,N={id:"a0c21537-397e-4399-b0c3-ebc05fbb52ce"};return D(async()=>{const{data:g}=await R($,N);console.log(g)}),(g,e)=>(i(),m("div",null,[t("div",G,[t("div",H,[e[4]||(e[4]=t("p",{class:"typography-headline-4 font-bold md:typography-headline-3"},"Order Summary",-1)),t("p",X,"(Items: "+n(r.items)+")",1)]),t("div",Z,[t("div",ee,[e[5]||(e[5]=t("div",{class:"flex flex-col grow pr-2"},[t("p",null,"Items Subtotal"),t("p",{class:"typography-text-xs text-neutral-500"},"Original Price"),t("p",{class:"typography-text-xs text-secondary-700"},"Savings"),t("p",{class:"my-2"},"Delivery"),t("p",null,"Estimated Sales Tax")],-1)),t("div",te,[t("p",null,n(c(P.value)),1),t("p",oe,n(c(r.originalPrice)),1),t("p",ae,n(c(r.savings)),1),t("p",se,n(c(r.delivery)),1),t("p",null,n(c(r.tax)),1)])]),y.value?(i(),m("div",re,[e[7]||(e[7]=t("p",null,"PromoCode",-1)),a(o(_),{size:"sm",variant:"tertiary",class:"ml-auto mr-2",onClick:L},{default:u(()=>e[6]||(e[6]=[p("Remove")])),_:1}),t("p",null,n(c(y.value)),1)])):(i(),m("form",{key:1,class:"flex gap-x-2 py-4 border-y border-neutral-200 mb-4",onSubmit:j(F,["prevent"])},[a(o(Y),{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=C=>s.value=C),placeholder:"Enter Promo Code","wrapper-class":"grow"},null,8,["modelValue"]),a(o(_),{type:"submit",variant:"secondary"},{default:u(()=>e[8]||(e[8]=[p("Apply")])),_:1})],32)),t("p",ie," You are saving $"+n(Math.abs(r.savings).toFixed(2))+" on your order today! ",1),t("div",le,[e[9]||(e[9]=t("p",null,"Total",-1)),t("p",null,n(c(E.value)),1)]),a(o(_),{size:"lg",class:"w-full"},{default:u(()=>e[10]||(e[10]=[p(" Place Order And Pay ")])),_:1}),t("div",ne,[e[13]||(e[13]=p(" By placing my order, you agree to our ")),a(o(q),{href:"#"},{default:u(()=>e[11]||(e[11]=[p("Terms and Conditions")])),_:1}),e[14]||(e[14]=p(" and our ")),a(o(q),{href:"#"},{default:u(()=>e[12]||(e[12]=[p("Privacy Policy.")])),_:1})])])]),t("div",de,[b.value?(i(),m("div",ue,[a(o(O),{class:"mr-2 my-2 text-positive-700"}),e[15]||(e[15]=t("p",{class:"py-2 mr-2"},"Your promo code has been added.",-1)),t("button",{type:"button",class:"p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900","aria-label":"Close positive alert",onClick:e[1]||(e[1]=C=>b.value=!1)},[a(o(v),{class:"hidden md:block"}),a(o(v),{size:"sm",class:"md:hidden block"})])])):S("",!0),l.value?(i(),m("div",ce,[a(o(O),{class:"mr-2 my-2 text-positive-700"}),e[16]||(e[16]=t("p",{class:"py-2 mr-2"},"Your promo code has been removed.",-1)),t("button",{type:"button",class:"p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900","aria-label":"Close positive alert",onClick:e[2]||(e[2]=C=>l.value=!1)},[a(o(v),{class:"hidden md:block"}),a(o(v),{size:"sm",class:"md:hidden block"})])])):S("",!0),f.value?(i(),m("div",pe,[e[17]||(e[17]=t("p",{class:"py-2 mr-2"},"This promo code is not valid.",-1)),t("button",{type:"button",class:"p-1.5 md:p-2 ml-auto rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900","aria-label":"Close error alert",onClick:e[3]||(e[3]=C=>f.value=!1)},[a(o(v),{class:"hidden md:block"}),a(o(v),{size:"sm",class:"md:hidden block"})])])):S("",!0)])]))}}),ye={};function ve(d,s){const l=me;return i(),m("div",null,[a(l)])}const Ce=Q(ye,[["render",ve]]);export{Ce as default};
