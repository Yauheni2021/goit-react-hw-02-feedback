import { Component } from "react";
import { Section } from "./Section/Section";
import {FeedbackOptions} from "./Feedback/FeedbackOptions"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions></FeedbackOptions>
        </Section>
      </>
    )
  }
};