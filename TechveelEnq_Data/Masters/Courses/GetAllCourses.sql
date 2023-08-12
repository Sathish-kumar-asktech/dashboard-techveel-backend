select 
tc.CourseId,
tc.Course_Name,
tc.Course_Duration,
tc.Course_Fee,
tc.CourseCategoryId,
tcc.Course_Category 
from 
TblCourseMst as tc 
left join 
TblCourseCategoryMst as tcc on 
tc.CourseCategoryId = tcc.CourseCategoryId  order by tc.CourseId desc