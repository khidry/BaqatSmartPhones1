/* إعدادات يمكن تعديلها بدون لمس الكود | Settings you can edit without touching the code */
window.CFG={
  dataUrl:"data/offers.json",     /* ملف العروض العام على الاستضافة (بدون التكلفة) */
  apiUrl:"",                      /* رابط Google Apps Script (apps-script/Code.gs) - يجعل التعديل والإضافة والتكلفة تعمل لكل الأجهزة */
  logoDir:"logos/",               /* مجلد الشعارات: mobily.png sawa.png salam.png friendi.png virgin.png libara.png redbull.png jawy.png zain.png */
  near:3,                         /* لو سعر العرض >= (الرسمي - 3) يختفي السعر الرسمي عند الزبون */
  adminPin:"1239",                /* الرقم السري لوضع الإدارة - يُستخدم فقط لو apiUrl فاضي. لو ربطت apiUrl امسحه من هنا (الرقم يُفحص في Code.gs) */
  editPin:"1984",                 /* الرقم السري للتعديل والإضافة - نفس الملاحظة */
  contact:{whatsapp:"",email:""}  /* مثال: whatsapp:"966500000000", email:"name@example.com" */
};
