0. **Author administration**: Try adding support for administering authors as well. Be sure to add some logic that makes sure you can't delete an author who already has a course.

0. **Delete course**: Add funcionality to delete a course.

0. **Hide empty course list**: Once you've added the power to delete a course make sure that you hide the empty course list once all courses are deleted.

0. **Unsaved changes message**: Message to the user if they try to leave the ManageCourseForm without unsaved changes.

0. **Client-side validation**: Enhance the ManageCourseForm client-side validation to validate things like the caregory and the link data as well.

0. **Handle 404's**: This is a surprisingly fun one, the special challenge of showing 404s is on the ManageCoursePage. You're going to need to add some logic to mapStateToProps.

0. **Show number of courses in Header**: This is a great example how Redux's single-store model really pays off. You'll see that adding this is really trivial, and there's no worry of it getting out of sync.

0. **Pagination**: Add pagination or infinite scrolling to the tables that we're using in order to support large data sets.

0. **Sort course table**: Sort the course table alphabetically by title by default so that the last record updated or created isn't always placed at the bottom like it is right now. mapStateToProps is where you want to get this done.

0. **Revert abandoned changes**: Consider keeping the old values for course data so that you can revert changes when the user navigates to a different page without saving.
