thai-address-database (ENG Version)

ใน Repository นี้ เป็นการแก้ไข Logic สำหรับการทำ Autocomplete ที่อยู่ประเทศไทย
โดยแก้ไขจากเดิมที่สามารถใช้ได้แค่ภาษาไทย ให้สามารถใช้ได้ในภาษาอังกฤษ 
โดยยังคง Concept Tree structure ของ https://github.com/earthchie/jquery.Thailand.js

- [x] แก้ไข Logic ของการ set new words จากภาษาไทย เป็นภาษาอังกฤษ
- [ ] implement ให้สามารถใช้ได้ทั้ง DB ภาษาไทย และภาษาอังกฤษ 
- [ ] เพิ่ม function searhc all สำหรับ province district amphoe zipcode
- [ ] rewording สำหรับคำว่า district และ subdistrict ให้ชัดเจนมากขึ้นเพื่อลดความก้ำกึ่งในการแปลภาษา
- [ ] test case

** ต้องการ update db ให้แก้ไขไฟล์ชื่อ database ใน /database/raw_database และ run `npm run migrate` **

_ณ ตอนนี้ยังใช้ได้แค่ข้อมูลภาษาอังกฤษเท่านั้น_

database format as .xlsx ดูจาก raw_database/database.xlsx
