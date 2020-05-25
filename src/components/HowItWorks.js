import React from 'react'

export default function HowItWorks() {
  return (
    <ol>
          <li>
            Visit
              <a href="https://github.com/wijohnst/AnswerTheseQuestions/issues" target="_blank" rel="noopener noreferrer"> The issues section of this repository</a>
          </li>
          <li>
            Each issue is a question that I want to answer
          </li>
          <li>
            Select a question that you can answer
          </li>
          <li>
            Create a markdown file that answers the question
          </li>
          <li>
            Name your markdown file like this : <p className="code">{`[issue_number].md`}</p>
          </li>
          <ul>
            <li> EX: <p className="code">1.md</p> for the question in issue 1</li>
          </ul>
          <li>
            Submit your answer as a Pull Request to the repo
            <ul>
              <li>Commit messages should follow this format : <p className="code">{"closes #[issue_number]"}</p>
              </li>
              <ul>
                <li>EX: <p className="code">"closes #1"</p> for issue #1</li>
              </ul>
            </ul>
          </li>
          <li>After your Pull Request has been approved, you will be awarded a point </li>
          <li> Climb the leaderboard for your chance to win a cool prize and help me become a better developer!</li>
        </ol>
  )
}
