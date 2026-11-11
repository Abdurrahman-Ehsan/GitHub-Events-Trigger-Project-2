- Activity types
Activity types specify which particular activity associated with an event should trigger the workflow.

For example, the issues event has several activity types:
on:
  issues:
    types: [opened, edited, closed]

- Filters
Filters specify additional conditions that an event must satisfy before triggering the workflow.

For example, you might want a workflow to run only when someone pushes code to the main branch.
on:
  push:
    branches:
      - main