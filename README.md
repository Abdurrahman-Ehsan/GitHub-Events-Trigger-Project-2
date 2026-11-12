- Activity types
Activity types specify which particular activity associated with an event should trigger the workflow.

For example, the issues event has several activity types:
on:
  issues:
    types: [opened, edited, closed]

- Filters
Filters specify additional conditions that an event must satisfy before triggering the workflow. I t also has cheetsheet

For example, you might want a workflow to run only when someone pushes code to the main branch.
on:
  push:
    branches:
      - main

Skip workflow runs: Prevent a workflow from running for a particular event. For example, include [skip ci] or [ci skip] in a commit message to skip workflows triggered by that push. GitHub will mark the associated check as Pending, which can affect pull-request merging if that check is required.

Cancel a workflow manually: If a workflow is already running, open your repository on GitHub → Actions → select the running workflow → open the specific run → click Cancel workflow. This stops the ongoing run and its remaining jobs.
    