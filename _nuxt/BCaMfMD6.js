import{j as C}from"./uVNfbozL.js";import{d as S,u as k,S as M,i as m,T,t as z,v as B,x as e,z as o,A as i,y as c,K as r,U as A,P as q,B as l,_ as F}from"./-NZt-jga.js";import{g as b}from"./BS4WOckm.js";const j={class:"py-14 relative z-0"},E={class:"main relative z-10"},N={class:"mt-5 flex justify-center gap-2"},R={class:"mt-14 flex justify-center gap-4"},$={class:"bg-white w-1/2"},D={class:"text-slate-50 text-center text-2xl font-bold py-2 bg-primary-700 uppercase"},P={class:"px-4"},V={class:"min-h-[130px]"},H={class:"text-center text-6xl py-4 font-bold border-b-2 border-gray-200"},L=["innerHTML"],U={class:"bg-white w-1/2"},W={class:"px-4"},K="mailto:hjohnson@winsightmedia.com?subject=Winsight Membership: Enterprise Inquiry",O=S({__name:"index",async setup(Q){let d,p;const y=k(),f=b`
 query productById($productId: Int!) {
  site {
    product(entityId: $productId) {
      id
      entityId
      variants {
        edges {
          node {
            id
            entityId
            sku
          }
        }
      }
      name
      plainTextDescription
      defaultImage {
        ...ImageFields
      }
      prices {
        price {
          ...MoneyFields
        }
      }
      brand {
        name
      }
    }
  }
}

fragment ImageFields on Image {
  url320wide: url(width: 320)
  url640wide: url(width: 640)
  url960wide: url(width: 960)
  url1280wide: url(width: 1280)
}

fragment MoneyFields on Money {
  value
  currencyCode
}
`,x=b`
mutation createCartSimple($createCartInput: CreateCartInput!) {
  cart {
    createCart(input: $createCartInput) {
      cart {
        entityId
      }
    }
  }
}
`,g={productId:112},u={createCartInput:{lineItems:[{quantity:1,productEntityId:112,variantEntityId:79}]}},{data:h}=([d,p]=M(()=>q(f,g)),d=await d,p(),d),{site:{product:a}}=h.value,v=m(()=>new Intl.NumberFormat("en",{style:"currency",currency:a.prices.price.currencyCode}).format(a.prices.price.value)),w=m(()=>`https://epam-gab-test.mybigcommerce.com/cart.php?action=buy&product_id=${a.entityId}`),{mutate:_}=T(x,u),I=async()=>{var t,s;const{data:n}=await _(u);(s=(t=n==null?void 0:n.cart)==null?void 0:t.createCart)!=null&&s.cart&&y.push({path:"/cart/"+n.cart.createCart.cart.entityId})};return(n,t)=>{const s=C;return z(),B("div",null,[e("section",j,[t[11]||(t[11]=e("div",{class:"bg"},null,-1)),e("div",E,[t[7]||(t[7]=e("h1",{class:"text-slate-50 text-center text-5xl font-bold"},"Subscribe now and future-proof your business.",-1)),t[8]||(t[8]=e("p",{class:"mt-6 text-slate-50 text-center font-bold"},"From award-winning restaurant industry news and in-depth special reports to original news analysis you can’t get anywhere else, the RB+ subscription provides you with the business intelligence you need for growth and success. Subscribe now.",-1)),t[9]||(t[9]=e("h2",{class:"text-slate-50 text-center text-2xl font-bold mt-12"},"Pricing Options",-1)),t[10]||(t[10]=e("p",{class:"mt-3 text-slate-50 text-center font-bold"},"Switch between monthly or annual membership plans to choose the option that works best for you.",-1)),e("div",N,[o(s,null,{default:i(()=>t[0]||(t[0]=[l("Monthly Pricing")])),_:1}),o(s,{variant:"secondary"},{default:i(()=>t[1]||(t[1]=[l("Annual Pricing")])),_:1})]),e("div",R,[e("div",$,[e("h3",D,c(r(a).name),1),e("div",P,[e("div",V,[e("div",H,c(r(v)),1),e("p",{class:"text-center text-l font-bold",innerHTML:r(a).plainTextDescription},null,8,L)]),o(s,{size:"sm",class:"w-full uppercase mt-5",tag:"a",href:r(w),target:"_blank"},{default:i(()=>[l("Subscribe up for "+c(r(a).name),1)]),_:1},8,["href"]),o(s,{size:"sm",class:"w-full uppercase mt-5",onClick:I},{default:i(()=>[l("Subscribe up for "+c(r(a).name),1)]),_:1}),t[2]||(t[2]=A('<ul class="py-5" data-v-db31be34><li class="py-2 border-b border-gray-200" data-v-db31be34><span class="border-primary-700 icon-check" data-v-db31be34></span><span class="ms-9" data-v-db31be34>Unlimited access to premium content</span></li><li class="py-2 border-b border-gray-200" data-v-db31be34><span class="border-primary-700 icon-check" data-v-db31be34></span><span class="ms-9" data-v-db31be34>Access to RB Special Reports, including the annual Top 500 Chains report</span></li><li class="py-2" data-v-db31be34><span class="border-primary-700 icon-check" data-v-db31be34></span><span class="ms-9" data-v-db31be34>Members-only newsletter</span></li></ul>',1))])]),e("div",U,[t[6]||(t[6]=e("h3",{class:"text-slate-50 text-center text-2xl font-bold py-2 bg-primary-700 uppercase"},"Enterprise",-1)),e("div",W,[t[4]||(t[4]=e("div",{class:"min-h-[130px]"},[e("p",{class:"text-center text-l font-bold pt-4"},"Are you interested in news personalized for your company? Do you need multiple licenses for your leadership team?")],-1)),o(s,{size:"sm",class:"w-full uppercase mt-5",tag:"a",href:K},{default:i(()=>t[3]||(t[3]=[l("Contact A Sales Rep")])),_:1}),t[5]||(t[5]=e("ul",{class:"py-5"},[e("li",{class:"py-2"},[e("span",{class:"border-primary-700 icon-check"}),e("span",{class:"ms-9"},"We’ll develop a plan that’s right for your organization.")])],-1))])])])])])])}}}),Y=F(O,[["__scopeId","data-v-db31be34"]]);export{Y as default};
