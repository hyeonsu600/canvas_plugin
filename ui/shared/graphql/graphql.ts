/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** an ISO8601 formatted time string */
  DateTime: { input: any; output: any; }
  /** HTML encoded string */
  HtmlEncodedString: { input: any; output: any; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
  /** An ISO 8601-encoded duration */
  ISO8601Duration: { input: any; output: any; }
  /** Represents untyped JSON */
  JSON: { input: any; output: any; }
  URL: { input: any; output: any; }
};

export type Account = LegacyIdInterface & Node & {
  __typename?: 'Account';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  accountDomainLookups?: Maybe<Array<AccountDomainLookup>>;
  accountDomains?: Maybe<Array<AccountDomain>>;
  coursesConnection?: Maybe<CourseConnection>;
  customGradeStatusesConnection?: Maybe<CustomGradeStatusConnection>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  outcomeCalculationMethod?: Maybe<OutcomeCalculationMethod>;
  outcomeProficiency?: Maybe<OutcomeProficiency>;
  parentAccountsConnection: AccountConnection;
  proficiencyRatingsConnection?: Maybe<ProficiencyRatingConnection>;
  rootOutcomeGroup: LearningOutcomeGroup;
  rubricsConnection?: Maybe<RubricConnection>;
  sisId?: Maybe<Scalars['String']['output']>;
  standardGradeStatusesConnection?: Maybe<StandardGradeStatusConnection>;
  subAccountsConnection?: Maybe<AccountConnection>;
};


export type AccountCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AccountCustomGradeStatusesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AccountParentAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AccountProficiencyRatingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AccountRubricsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AccountStandardGradeStatusesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AccountSubAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for Account. */
export type AccountConnection = {
  __typename?: 'AccountConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AccountEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Account>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AccountDomain = LegacyIdInterface & Timestamped & {
  __typename?: 'AccountDomain';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  host: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountDomainLookup = LegacyIdInterface & Timestamped & {
  __typename?: 'AccountDomainLookup';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  accountDomain?: Maybe<AccountDomain>;
  authenticationProvider?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** An edge in a connection. */
export type AccountEdge = {
  __typename?: 'AccountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Account>;
};

/** An activity stream */
export type ActivityStream = {
  __typename?: 'ActivityStream';
  /** Returns a summary of the activity stream items for the current context */
  summary?: Maybe<Array<StreamSummaryItem>>;
};

/** Autogenerated input type of AddConversationMessage */
export type AddConversationMessageInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  body: Scalars['String']['input'];
  contextCode?: InputMaybe<Scalars['String']['input']>;
  conversationId: Scalars['ID']['input'];
  includedMessages?: InputMaybe<Array<Scalars['ID']['input']>>;
  mediaCommentId?: InputMaybe<Scalars['ID']['input']>;
  mediaCommentType?: InputMaybe<Scalars['String']['input']>;
  recipients: Array<Scalars['String']['input']>;
};

/** Autogenerated return type of AddConversationMessage. */
export type AddConversationMessagePayload = {
  __typename?: 'AddConversationMessagePayload';
  conversationMessage?: Maybe<ConversationMessage>;
  errors?: Maybe<Array<ValidationError>>;
};

/** A list of students that an `AssignmentOverride` applies to */
export type AdhocStudents = {
  __typename?: 'AdhocStudents';
  students?: Maybe<Array<User>>;
};

/** An anonymous student identity */
export type AnonymousStudentIdentity = {
  __typename?: 'AnonymousStudentIdentity';
  anonymousId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
};

export type AnonymousUser = {
  __typename?: 'AnonymousUser';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  shortName: Scalars['String']['output'];
};

export type AssessmentRequest = LegacyIdInterface & Timestamped & {
  __typename?: 'AssessmentRequest';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  anonymizedUser?: Maybe<User>;
  anonymousId?: Maybe<Scalars['String']['output']>;
  assetId: Scalars['String']['output'];
  assetSubmissionType?: Maybe<Scalars['String']['output']>;
  available?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  workflowState: Scalars['String']['output'];
};

/** The type of assessment */
export enum AssessmentType {
  Grading = 'grading',
  PeerReview = 'peer_review',
  ProvisionalGrade = 'provisional_grade',
  SelfAssessment = 'self_assessment'
}

export type AssetString = {
  assetString?: Maybe<Scalars['String']['output']>;
};

export type Assignment = LegacyIdInterface & ModuleItemInterface & Node & Timestamped & {
  __typename?: 'Assignment';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  allowGoogleDocsSubmission?: Maybe<Scalars['Boolean']['output']>;
  /** The number of submission attempts a student can make for this assignment. null implies unlimited. */
  allowedAttempts?: Maybe<Scalars['Int']['output']>;
  /** permitted uploaded file extensions (e.g. ['doc', 'xls', 'txt']) */
  allowedExtensions?: Maybe<Array<Scalars['String']['output']>>;
  anonymizeStudents?: Maybe<Scalars['Boolean']['output']>;
  anonymousGrading?: Maybe<Scalars['Boolean']['output']>;
  anonymousInstructorAnnotations?: Maybe<Scalars['Boolean']['output']>;
  anonymousStudentIdentities?: Maybe<Array<AnonymousStudentIdentity>>;
  assessmentRequestsForCurrentUser?: Maybe<Array<AssessmentRequest>>;
  assignmentGroup?: Maybe<AssignmentGroup>;
  assignmentGroupId?: Maybe<Scalars['ID']['output']>;
  assignmentOverrides?: Maybe<AssignmentOverrideConnection>;
  assignmentTargetConnection?: Maybe<AssignmentOverrideConnection>;
  /** Issues related to the assignment */
  autoGradeAssignmentErrors: Array<Scalars['String']['output']>;
  canDuplicate?: Maybe<Scalars['Boolean']['output']>;
  canUnpublish?: Maybe<Scalars['Boolean']['output']>;
  /** specifies that the current user can update the rubric self-assessment. */
  canUpdateRubricSelfAssessment?: Maybe<Scalars['Boolean']['output']>;
  checkpoints?: Maybe<Array<Checkpoint>>;
  course?: Maybe<Course>;
  courseId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discussion?: Maybe<Discussion>;
  /** when this assignment is due */
  dueAt?: Maybe<Scalars['DateTime']['output']>;
  dueDateRequired?: Maybe<Scalars['Boolean']['output']>;
  expectsExternalSubmission?: Maybe<Scalars['Boolean']['output']>;
  expectsSubmission?: Maybe<Scalars['Boolean']['output']>;
  /** specifies that students are being graded as a group (as opposed to being graded individually). */
  gradeAsGroup: Scalars['Boolean']['output'];
  gradeByQuestionEnabled: Scalars['Boolean']['output'];
  /** If this is a group assignment, boolean flag indicating whether or not students will be graded individually. */
  gradeGroupStudentsIndividually?: Maybe<Scalars['Boolean']['output']>;
  graded?: Maybe<Scalars['Boolean']['output']>;
  /** If true, the assignment has at least one graded submission */
  gradedSubmissionsExist?: Maybe<Scalars['Boolean']['output']>;
  gradesPublished?: Maybe<Scalars['Boolean']['output']>;
  gradesPublishedAt?: Maybe<Scalars['String']['output']>;
  gradingPeriodId?: Maybe<Scalars['String']['output']>;
  gradingStandard?: Maybe<GradingStandard>;
  gradingType?: Maybe<GradingType>;
  groupCategoryId?: Maybe<Scalars['Int']['output']>;
  groupSet?: Maybe<GroupSet>;
  /** returns submissions grouped to one submission object per group */
  groupSubmissionsConnection?: Maybe<SubmissionConnection>;
  /** specifies that this assignment is a group assignment */
  hasGroupCategory: Scalars['Boolean']['output'];
  hasMultipleDueDates?: Maybe<Scalars['Boolean']['output']>;
  hasSubAssignments: Scalars['Boolean']['output'];
  /** If true, the assignment has been submitted to by at least one student */
  hasSubmittedSubmissions?: Maybe<Scalars['Boolean']['output']>;
  htmlUrl?: Maybe<Scalars['URL']['output']>;
  id: Scalars['ID']['output'];
  importantDates?: Maybe<Scalars['Boolean']['output']>;
  inClosedGradingPeriod?: Maybe<Scalars['Boolean']['output']>;
  isLockedByMasterCourse: Scalars['Boolean']['output'];
  /** Assignment is connected to a New Quiz */
  isNewQuiz: Scalars['Boolean']['output'];
  /** the lock date (assignment is locked after this date) */
  lockAt?: Maybe<Scalars['DateTime']['output']>;
  lockInfo?: Maybe<LockInfo>;
  ltiAssetProcessorsConnection?: Maybe<LtiAssetProcessorConnection>;
  moderatedGrading?: Maybe<ModeratedGrading>;
  moderatedGradingEnabled?: Maybe<Scalars['Boolean']['output']>;
  modules?: Maybe<Array<Module>>;
  mySubAssignmentSubmissionsConnection?: Maybe<SubmissionConnection>;
  name?: Maybe<Scalars['String']['output']>;
  needsGradingCount?: Maybe<Scalars['Int']['output']>;
  nonDigitalSubmission?: Maybe<Scalars['Boolean']['output']>;
  /** If true, the assignment will be omitted from the student's final grade */
  omitFromFinalGrade?: Maybe<Scalars['Boolean']['output']>;
  /**
   * specifies that this assignment is only assigned to students for whom an
   *        `AssignmentOverride` applies.
   */
  onlyVisibleToOverrides: Scalars['Boolean']['output'];
  originalityReportVisibility?: Maybe<Scalars['String']['output']>;
  peerReviews?: Maybe<PeerReviews>;
  /** the assignment is out of this many points */
  pointsPossible?: Maybe<Scalars['Float']['output']>;
  /** determines the order this assignment is displayed in in its assignment group */
  position?: Maybe<Scalars['Int']['output']>;
  postManually?: Maybe<Scalars['Boolean']['output']>;
  postPolicy?: Maybe<PostPolicy>;
  /** present if Sync Grades to SIS feature is enabled */
  postToSis?: Maybe<Scalars['Boolean']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  quiz?: Maybe<Quiz>;
  /** Is the current user restricted from viewing quantitative data */
  restrictQuantitativeData?: Maybe<Scalars['Boolean']['output']>;
  rubric?: Maybe<Rubric>;
  rubricAssessment?: Maybe<AssignmentRubricAssessment>;
  rubricAssociation?: Maybe<RubricAssociation>;
  /** specifies that students can self-assess using the assignment rubric. */
  rubricSelfAssessmentEnabled?: Maybe<Scalars['Boolean']['output']>;
  rubricUpdateUrl?: Maybe<Scalars['String']['output']>;
  scoreStatistic?: Maybe<AssignmentScoreStatistic>;
  sisId?: Maybe<Scalars['String']['output']>;
  state: AssignmentState;
  submissionTypes?: Maybe<Array<SubmissionType>>;
  /** submissions for this assignment */
  submissionsConnection?: Maybe<SubmissionConnection>;
  submissionsDownloads?: Maybe<Scalars['Int']['output']>;
  supportsGradeByQuestion: Scalars['Boolean']['output'];
  timeZoneEdited?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  totalGradedSubmissions?: Maybe<Scalars['Int']['output']>;
  totalSubmissions?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  /** the unlock date (assignment is unlocked after this date) */
  unlockAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** specifies all other variables that can determine visiblity. */
  visibleToEveryone: Scalars['Boolean']['output'];
};


export type AssignmentAssignmentOverridesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AssignmentAssignmentTargetConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AssignmentTargetSortOrder>;
};


export type AssignmentDueAtArgs = {
  applyOverrides?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssignmentGroupSubmissionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SubmissionSearchFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SubmissionSearchOrder>>;
};


export type AssignmentLockAtArgs = {
  applyOverrides?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssignmentLtiAssetProcessorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AssignmentMySubAssignmentSubmissionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AssignmentRestrictQuantitativeDataArgs = {
  checkExtraPermissions?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssignmentSubmissionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SubmissionSearchFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SubmissionSearchOrder>>;
};


export type AssignmentUnlockAtArgs = {
  applyOverrides?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The connection type for Assignment. */
export type AssignmentConnection = {
  __typename?: 'AssignmentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AssignmentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Assignment>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssignmentCreate = {
  abGuid?: InputMaybe<Array<Scalars['String']['input']>>;
  assignmentGroupId?: InputMaybe<Scalars['ID']['input']>;
  assignmentOverrides?: InputMaybe<Array<AssignmentOverrideCreateOrUpdate>>;
  courseId: Scalars['ID']['input'];
  dueAt?: InputMaybe<Scalars['DateTime']['input']>;
  forCheckpoints?: InputMaybe<Scalars['Boolean']['input']>;
  gradingStandardId?: InputMaybe<Scalars['ID']['input']>;
  gradingType?: InputMaybe<GradingType>;
  groupCategoryId?: InputMaybe<Scalars['ID']['input']>;
  importantDates?: InputMaybe<Scalars['Boolean']['input']>;
  intraReviews?: InputMaybe<Scalars['Boolean']['input']>;
  lockAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  onlyVisibleToOverrides?: InputMaybe<Scalars['Boolean']['input']>;
  peerReviews?: InputMaybe<AssignmentPeerReviewsUpdate>;
  pointsPossible?: InputMaybe<Scalars['Float']['input']>;
  postToSis?: InputMaybe<Scalars['Boolean']['input']>;
  unlockAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** An edge in a connection. */
export type AssignmentEdge = {
  __typename?: 'AssignmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Assignment>;
};

export type AssignmentFilter = {
  /**
   * only return assignments for the given grading period. Defaults to
   * the current grading period. Pass `null` to return all assignments
   * (irrespective of the assignment's grading period)
   */
  gradingPeriodId?: InputMaybe<Scalars['ID']['input']>;
  /** only return assignments whose title matches this search term */
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  /**
   * only return assignments for the given user. Defaults to
   * the current user.
   */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type AssignmentGroup = AssignmentsConnectionInterface & LegacyIdInterface & Node & Timestamped & {
  __typename?: 'AssignmentGroup';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  /**
   * returns a list of assignments.
   *
   * **NOTE**: for courses with grading periods, this will only return grading
   * periods in the current course; see `AssignmentFilter` for more info.
   * In courses with grading periods that don't have students, it is necessary
   * to *not* filter by grading period to list assignments.
   */
  assignmentsConnection?: Maybe<AssignmentConnection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** grades for this assignment group */
  gradesConnection?: Maybe<GradesConnection>;
  groupWeight?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  rules?: Maybe<AssignmentGroupRules>;
  sisId?: Maybe<Scalars['String']['output']>;
  state: AssignmentGroupState;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AssignmentGroupAssignmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AssignmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AssignmentGroupGradesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GradesEnrollmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for AssignmentGroup. */
export type AssignmentGroupConnection = {
  __typename?: 'AssignmentGroupConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AssignmentGroupEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AssignmentGroup>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AssignmentGroupEdge = {
  __typename?: 'AssignmentGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<AssignmentGroup>;
};

export type AssignmentGroupRules = {
  __typename?: 'AssignmentGroupRules';
  /** The highest N assignments are not included in grade calculations */
  dropHighest?: Maybe<Scalars['Int']['output']>;
  /** The lowest N assignments are not included in grade calculations */
  dropLowest?: Maybe<Scalars['Int']['output']>;
  neverDrop?: Maybe<Array<Assignment>>;
};

/** States that Assignment Group can be in */
export enum AssignmentGroupState {
  Available = 'available',
  Deleted = 'deleted'
}

export type AssignmentModeratedGradingUpdate = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  finalGraderId?: InputMaybe<Scalars['ID']['input']>;
  graderCommentsVisibleToGraders?: InputMaybe<Scalars['Boolean']['input']>;
  graderCount?: InputMaybe<Scalars['Int']['input']>;
  graderNamesVisibleToFinalGrader?: InputMaybe<Scalars['Boolean']['input']>;
  gradersAnonymousToGraders?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssignmentOverride = Timestamped & {
  __typename?: 'AssignmentOverride';
  /** legacy canvas id */
  _id?: Maybe<Scalars['ID']['output']>;
  allDay?: Maybe<Scalars['Boolean']['output']>;
  assignment?: Maybe<Assignment>;
  contextModule?: Maybe<Module>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dueAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lockAt?: Maybe<Scalars['DateTime']['output']>;
  /** This object specifies what students this override applies to */
  set?: Maybe<AssignmentOverrideSet>;
  title?: Maybe<Scalars['String']['output']>;
  unassignItem?: Maybe<Scalars['Boolean']['output']>;
  unlockAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** The connection type for AssignmentOverride. */
export type AssignmentOverrideConnection = {
  __typename?: 'AssignmentOverrideConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AssignmentOverrideEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AssignmentOverride>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssignmentOverrideCreateOrUpdate = {
  courseId?: InputMaybe<Scalars['ID']['input']>;
  courseSectionId?: InputMaybe<Scalars['ID']['input']>;
  dueAt?: InputMaybe<Scalars['DateTime']['input']>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lockAt?: InputMaybe<Scalars['DateTime']['input']>;
  noopId?: InputMaybe<Scalars['ID']['input']>;
  studentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  unassignItem?: InputMaybe<Scalars['Boolean']['input']>;
  unlockAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** An edge in a connection. */
export type AssignmentOverrideEdge = {
  __typename?: 'AssignmentOverrideEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<AssignmentOverride>;
};

/** Objects that can be assigned overridden dates */
export type AssignmentOverrideSet = AdhocStudents | Course | Group | Noop | Section;

export type AssignmentPeerReviewsUpdate = {
  anonymousReviews?: InputMaybe<Scalars['Boolean']['input']>;
  automaticReviews?: InputMaybe<Scalars['Boolean']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  dueAt?: InputMaybe<Scalars['DateTime']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  intraReviews?: InputMaybe<Scalars['Boolean']['input']>;
};

/** RubricAssessments on an Assignment */
export type AssignmentRubricAssessment = {
  __typename?: 'AssignmentRubricAssessment';
  /** The count of RubricAssessments on an Assignment. */
  assessmentsCount?: Maybe<Scalars['Int']['output']>;
};

/** Statistics for an Assignment */
export type AssignmentScoreStatistic = {
  __typename?: 'AssignmentScoreStatistic';
  /** The number of scores for the assignment */
  count?: Maybe<Scalars['Int']['output']>;
  /** The lower quartile score for the assignment */
  lowerQ?: Maybe<Scalars['Float']['output']>;
  /** The maximum score for the assignment */
  maximum?: Maybe<Scalars['Float']['output']>;
  /** The mean score for the assignment */
  mean?: Maybe<Scalars['Float']['output']>;
  /** The median score for the assignment */
  median?: Maybe<Scalars['Float']['output']>;
  /** The minimum score for the assignment */
  minimum?: Maybe<Scalars['Float']['output']>;
  /** The upper quartile score for the assignment */
  upperQ?: Maybe<Scalars['Float']['output']>;
};

/** States that an Assignment can be in */
export enum AssignmentState {
  Deleted = 'deleted',
  Duplicating = 'duplicating',
  FailToImport = 'fail_to_import',
  FailedToCloneOutcomeAlignment = 'failed_to_clone_outcome_alignment',
  FailedToDuplicate = 'failed_to_duplicate',
  FailedToMigrate = 'failed_to_migrate',
  Importing = 'importing',
  Migrating = 'migrating',
  OutcomeAlignmentCloning = 'outcome_alignment_cloning',
  Published = 'published',
  Unpublished = 'unpublished'
}

/** Field to sort by */
export enum AssignmentTargetSortField {
  DueAt = 'due_at',
  LockAt = 'lock_at',
  Title = 'title',
  UnlockAt = 'unlock_at'
}

/** Specify a sort order for the results */
export type AssignmentTargetSortOrder = {
  direction?: InputMaybe<OrderDirection>;
  field: AssignmentTargetSortField;
};

export type AssignmentUpdate = {
  abGuid?: InputMaybe<Array<Scalars['String']['input']>>;
  assignmentGroupId?: InputMaybe<Scalars['ID']['input']>;
  assignmentOverrides?: InputMaybe<Array<AssignmentOverrideCreateOrUpdate>>;
  dueAt?: InputMaybe<Scalars['DateTime']['input']>;
  forCheckpoints?: InputMaybe<Scalars['Boolean']['input']>;
  gradingStandardId?: InputMaybe<Scalars['ID']['input']>;
  gradingType?: InputMaybe<GradingType>;
  groupCategoryId?: InputMaybe<Scalars['ID']['input']>;
  importantDates?: InputMaybe<Scalars['Boolean']['input']>;
  intraReviews?: InputMaybe<Scalars['Boolean']['input']>;
  lockAt?: InputMaybe<Scalars['DateTime']['input']>;
  onlyVisibleToOverrides?: InputMaybe<Scalars['Boolean']['input']>;
  peerReviews?: InputMaybe<AssignmentPeerReviewsUpdate>;
  pointsPossible?: InputMaybe<Scalars['Float']['input']>;
  postToSis?: InputMaybe<Scalars['Boolean']['input']>;
  setAssignment?: InputMaybe<Scalars['Boolean']['input']>;
  unlockAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AssignmentsConnectionInterface = {
  /**
   * returns a list of assignments.
   *
   * **NOTE**: for courses with grading periods, this will only return grading
   * periods in the current course; see `AssignmentFilter` for more info.
   * In courses with grading periods that don't have students, it is necessary
   * to *not* filter by grading period to list assignments.
   */
  assignmentsConnection?: Maybe<AssignmentConnection>;
};


export type AssignmentsConnectionInterfaceAssignmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AssignmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AuditEvent = LegacyIdInterface & Timestamped & {
  __typename?: 'AuditEvent';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventType: AuditEventType;
  externalTool?: Maybe<AuditEventExternalTool>;
  payload?: Maybe<Scalars['JSON']['output']>;
  quiz?: Maybe<AuditEventQuiz>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<AuditEventUser>;
};

/** The connection type for AuditEvent. */
export type AuditEventConnection = {
  __typename?: 'AuditEventConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AuditEventEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AuditEvent>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AuditEventEdge = {
  __typename?: 'AuditEventEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<AuditEvent>;
};

export type AuditEventExternalTool = LegacyIdInterface & {
  __typename?: 'AuditEventExternalTool';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  role: AuditEventRole;
};

export type AuditEventQuiz = LegacyIdInterface & {
  __typename?: 'AuditEventQuiz';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  role: AuditEventRole;
};

export enum AuditEventRole {
  Admin = 'admin',
  FinalGrader = 'final_grader',
  Grader = 'grader',
  Student = 'student'
}

export enum AuditEventType {
  AssignmentCreated = 'assignment_created',
  AssignmentUpdated = 'assignment_updated',
  DocviewerAreaCreated = 'docviewer_area_created',
  DocviewerAreaDeleted = 'docviewer_area_deleted',
  DocviewerAreaUpdated = 'docviewer_area_updated',
  DocviewerCommentCreated = 'docviewer_comment_created',
  DocviewerCommentDeleted = 'docviewer_comment_deleted',
  DocviewerCommentUpdated = 'docviewer_comment_updated',
  DocviewerFreeDrawCreated = 'docviewer_free_draw_created',
  DocviewerFreeDrawDeleted = 'docviewer_free_draw_deleted',
  DocviewerFreeDrawUpdated = 'docviewer_free_draw_updated',
  DocviewerFreeTextCreated = 'docviewer_free_text_created',
  DocviewerFreeTextDeleted = 'docviewer_free_text_deleted',
  DocviewerFreeTextUpdated = 'docviewer_free_text_updated',
  DocviewerHighlightCreated = 'docviewer_highlight_created',
  DocviewerHighlightDeleted = 'docviewer_highlight_deleted',
  DocviewerHighlightUpdated = 'docviewer_highlight_updated',
  DocviewerPointCreated = 'docviewer_point_created',
  DocviewerPointDeleted = 'docviewer_point_deleted',
  DocviewerPointUpdated = 'docviewer_point_updated',
  DocviewerStrikeoutCreated = 'docviewer_strikeout_created',
  DocviewerStrikeoutDeleted = 'docviewer_strikeout_deleted',
  DocviewerStrikeoutUpdated = 'docviewer_strikeout_updated',
  GradesPosted = 'grades_posted',
  ProvisionalGradeCreated = 'provisional_grade_created',
  ProvisionalGradeSelected = 'provisional_grade_selected',
  ProvisionalGradeUpdated = 'provisional_grade_updated',
  RubricCreated = 'rubric_created',
  RubricDeleted = 'rubric_deleted',
  RubricUpdated = 'rubric_updated',
  SubmissionCommentCreated = 'submission_comment_created',
  SubmissionCommentDeleted = 'submission_comment_deleted',
  SubmissionCommentUpdated = 'submission_comment_updated',
  SubmissionUpdated = 'submission_updated'
}

export type AuditEventUser = LegacyIdInterface & {
  __typename?: 'AuditEventUser';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  role: AuditEventRole;
};

export type AuditLogs = {
  __typename?: 'AuditLogs';
  /** A list of all recent graphql mutations run on the specified object */
  mutationLogs?: Maybe<MutationLogConnection>;
};


export type AuditLogsMutationLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  assetString: Scalars['String']['input'];
  before?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Autogenerated input type of AutoGradeSubmission */
export type AutoGradeSubmissionInput = {
  submissionId: Scalars['ID']['input'];
};

/** Autogenerated return type of AutoGradeSubmission. */
export type AutoGradeSubmissionPayload = {
  __typename?: 'AutoGradeSubmissionPayload';
  error?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
  progress?: Maybe<Progress>;
};

/** Determines if/how a leader is chosen for each group */
export enum AutoLeaderPolicy {
  /** the first student assigned to the group is the leader */
  First = 'first',
  /** a leader is chosen at random */
  Random = 'random'
}

/** Method of selecting an automatic leader for groups */
export enum AutoLeaderType {
  First = 'first',
  Random = 'random'
}

export type Checkpoint = {
  __typename?: 'Checkpoint';
  assignmentOverrides?: Maybe<AssignmentOverrideConnection>;
  /** when this checkpoint is due */
  dueAt?: Maybe<Scalars['DateTime']['output']>;
  /** when this checkpoint is closed */
  lockAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** specifies that this checkpoint is only assigned to students for whom an override applies */
  onlyVisibleToOverrides: Scalars['Boolean']['output'];
  /** the checkpoint is out of this many points */
  pointsPossible: Scalars['Float']['output'];
  /** the tag of the checkpoint */
  tag: Scalars['String']['output'];
  /** when this checkpoint is available */
  unlockAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CheckpointAssignmentOverridesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CheckpointDueAtArgs = {
  applyOverrides?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CheckpointLockAtArgs = {
  applyOverrides?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CheckpointUnlockAtArgs = {
  applyOverrides?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Valid labels for discussion checkpoint types */
export enum CheckpointLabelType {
  ReplyToEntry = 'reply_to_entry',
  ReplyToTopic = 'reply_to_topic'
}

/** Comment bank items */
export type CommentBankItem = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'CommentBankItem';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  comment: Scalars['String']['output'];
  courseId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId: Scalars['ID']['output'];
};

/** The connection type for CommentBankItem. */
export type CommentBankItemConnection = {
  __typename?: 'CommentBankItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommentBankItemEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CommentBankItem>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CommentBankItemEdge = {
  __typename?: 'CommentBankItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<CommentBankItem>;
};

export type CommunicationChannel = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'CommunicationChannel';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  notificationPolicies?: Maybe<Array<NotificationPolicy>>;
  notificationPolicyOverrides?: Maybe<Array<NotificationPolicy>>;
  path?: Maybe<Scalars['String']['output']>;
  pathType?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CommunicationChannelNotificationPoliciesArgs = {
  contextType?: InputMaybe<NotificationPreferencesContextType>;
};


export type CommunicationChannelNotificationPolicyOverridesArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  contextType: NotificationPreferencesContextType;
  courseId?: InputMaybe<Scalars['ID']['input']>;
};

/** An edge in a connection. */
export type ContentTag = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'ContentTag';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  canUnlink?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  group?: Maybe<LearningOutcomeGroup>;
  id: Scalars['ID']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ContentTagContent>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** The connection type for ContentTagContent. */
export type ContentTagConnection = {
  __typename?: 'ContentTagConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContentTag>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ContentTagContent>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Content of a Content Tag */
export type ContentTagContent = LearningOutcome;

export type Conversation = Node & {
  __typename?: 'Conversation';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  canReply?: Maybe<Scalars['Boolean']['output']>;
  contextAssetString?: Maybe<Scalars['String']['output']>;
  contextId?: Maybe<Scalars['ID']['output']>;
  contextName?: Maybe<Scalars['String']['output']>;
  contextType?: Maybe<Scalars['String']['output']>;
  conversationMessagesConnection?: Maybe<ConversationMessageConnection>;
  conversationMessagesCount: Scalars['Int']['output'];
  conversationParticipantsConnection?: Maybe<ConversationParticipantConnection>;
  id: Scalars['ID']['output'];
  isPrivate?: Maybe<Scalars['Boolean']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ConversationConversationMessagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  participants?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type ConversationConversationParticipantsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConversationMessage = {
  __typename?: 'ConversationMessage';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  attachments?: Maybe<Array<File>>;
  attachmentsConnection?: Maybe<FileConnection>;
  author?: Maybe<User>;
  body: Scalars['String']['output'];
  conversationId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  mediaComment?: Maybe<MediaObject>;
  recipients: Array<User>;
};


export type ConversationMessageAttachmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for ConversationMessage. */
export type ConversationMessageConnection = {
  __typename?: 'ConversationMessageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ConversationMessageEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ConversationMessage>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ConversationMessageEdge = {
  __typename?: 'ConversationMessageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ConversationMessage>;
};

export type ConversationParticipant = {
  __typename?: 'ConversationParticipant';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  conversation?: Maybe<Conversation>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  messages?: Maybe<ConversationMessageConnection>;
  subscribed: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
  workflowState: Scalars['String']['output'];
};


export type ConversationParticipantMessagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for ConversationParticipant. */
export type ConversationParticipantConnection = {
  __typename?: 'ConversationParticipantConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ConversationParticipantEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ConversationParticipant>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ConversationParticipantEdge = {
  __typename?: 'ConversationParticipantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ConversationParticipant>;
};

export type Course = AssetString & AssignmentsConnectionInterface & DiscussionsConnectionInterface & FilesConnectionInterface & LegacyIdInterface & Node & PagesConnectionInterface & QuizzesConnectionInterface & Timestamped & {
  __typename?: 'Course';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  account?: Maybe<Account>;
  activityStream?: Maybe<ActivityStream>;
  allowFinalGradeOverride?: Maybe<Scalars['Boolean']['output']>;
  applyGroupWeights?: Maybe<Scalars['Boolean']['output']>;
  assetString?: Maybe<Scalars['String']['output']>;
  assignmentGroups?: Maybe<Array<AssignmentGroup>>;
  assignmentGroupsConnection?: Maybe<AssignmentGroupConnection>;
  /** PostPolicies for assignments within a course */
  assignmentPostPolicies?: Maybe<PostPolicyConnection>;
  /**
   * returns a list of assignments.
   *
   * **NOTE**: for courses with grading periods, this will only return grading
   * periods in the current course; see `AssignmentFilter` for more info.
   * In courses with grading periods that don't have students, it is necessary
   * to *not* filter by grading period to list assignments.
   */
  assignmentsConnection?: Maybe<AssignmentConnection>;
  availableModerators?: Maybe<UserConnection>;
  availableModeratorsCount?: Maybe<Scalars['Int']['output']>;
  /** course short name */
  courseCode?: Maybe<Scalars['String']['output']>;
  courseNickname?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customGradeStatusesConnection?: Maybe<CustomGradeStatusConnection>;
  /** returns dashboard card information for this course */
  dashboardCard?: Maybe<CourseDashboardCard>;
  /** returns a list of discussions. */
  discussionsConnection?: Maybe<DiscussionConnection>;
  enrollmentsConnection?: Maybe<EnrollmentConnection>;
  externalToolsConnection?: Maybe<ExternalToolConnection>;
  /** returns a list of files. */
  filesConnection?: Maybe<FileConnection>;
  /** Folders for this course. */
  foldersConnection?: Maybe<FolderConnection>;
  gradeStatuses: Array<CourseGradeStatus>;
  gradingPeriodsConnection?: Maybe<GradingPeriodConnection>;
  gradingStandard?: Maybe<GradingStandard>;
  /** Project group sets for this course. */
  groupSets?: Maybe<Array<GroupSet>>;
  /** Project group sets for this course. */
  groupSetsConnection?: Maybe<GroupSetConnection>;
  groupsConnection?: Maybe<GroupConnection>;
  horizonCourse?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  /**
   * Returns a URL for the course image (this is the image used on dashboard
   * course cards)
   */
  imageUrl?: Maybe<Scalars['URL']['output']>;
  modulesConnection?: Maybe<ModuleConnection>;
  name: Scalars['String']['output'];
  outcomeAlignmentStats?: Maybe<CourseOutcomeAlignmentStats>;
  outcomeCalculationMethod?: Maybe<OutcomeCalculationMethod>;
  outcomeProficiency?: Maybe<OutcomeProficiency>;
  /** returns a list of wiki pages. */
  pagesConnection?: Maybe<PageConnection>;
  /** returns permission information for the current user in this course */
  permissions?: Maybe<CoursePermissions>;
  /** A course-specific post policy */
  postPolicy?: Maybe<PostPolicy>;
  /** returns a list of quizzes. */
  quizzesConnection?: Maybe<QuizConnection>;
  relevantGradingPeriodGroup?: Maybe<GradingPeriodGroup>;
  rootOutcomeGroup: LearningOutcomeGroup;
  rubricsConnection?: Maybe<RubricConnection>;
  sectionsConnection?: Maybe<SectionConnection>;
  sisId?: Maybe<Scalars['String']['output']>;
  state: CourseWorkflowState;
  /** Returns submission-related statistics for the current user */
  submissionStatistics?: Maybe<SubmissionStatistics>;
  /** all the submissions for assignments in this course */
  submissionsConnection?: Maybe<SubmissionConnection>;
  syllabusBody?: Maybe<Scalars['String']['output']>;
  term?: Maybe<Term>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  usersConnection?: Maybe<UserConnection>;
  usersConnectionCount?: Maybe<Scalars['Int']['output']>;
};


export type CourseAssignmentGroupsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseAssignmentPostPoliciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseAssignmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AssignmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseAvailableModeratorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseCustomGradeStatusesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseDiscussionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DiscussionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseEnrollmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnrollmentFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseExternalToolsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ExternalToolFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseFilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseFoldersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseGradingPeriodsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseGroupSetsArgs = {
  includeNonCollaborative?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CourseGroupSetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeNonCollaborative?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseGroupsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeNonCollaborative?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseModulesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CoursePagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseQuizzesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<QuizFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseRubricsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseSectionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CourseSectionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseSubmissionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SubmissionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SubmissionOrderCriteria>>;
  studentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type CourseUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CourseUsersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CourseUsersSortInputType>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type CourseUsersConnectionCountArgs = {
  filter?: InputMaybe<CourseUsersFilter>;
  sort?: InputMaybe<CourseUsersSortInputType>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** The connection type for Course. */
export type CourseConnection = {
  __typename?: 'CourseConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CourseEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Course>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A card on the course dashboard */
export type CourseDashboardCard = {
  __typename?: 'CourseDashboardCard';
  assetString?: Maybe<Scalars['String']['output']>;
  canChangeCoursePublishState?: Maybe<Scalars['Boolean']['output']>;
  canManage?: Maybe<Scalars['Boolean']['output']>;
  canReadAnnouncements?: Maybe<Scalars['Boolean']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  courseCode?: Maybe<Scalars['String']['output']>;
  defaultView?: Maybe<Scalars['String']['output']>;
  enrollmentState?: Maybe<Scalars['String']['output']>;
  enrollmentType?: Maybe<Scalars['String']['output']>;
  frontPageTitle?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['URL']['output']>;
  isFavorited?: Maybe<Scalars['Boolean']['output']>;
  isHomeroom?: Maybe<Scalars['Boolean']['output']>;
  isK5Subject?: Maybe<Scalars['Boolean']['output']>;
  links?: Maybe<Array<CourseDashboardCardLink>>;
  longName?: Maybe<Scalars['String']['output']>;
  observee?: Maybe<Scalars['String']['output']>;
  originalName?: Maybe<Scalars['String']['output']>;
  pagesUrl?: Maybe<Scalars['URL']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  term?: Maybe<Term>;
  useClassicFont?: Maybe<Scalars['Boolean']['output']>;
};

/** A link on a course dashboard card */
export type CourseDashboardCardLink = {
  __typename?: 'CourseDashboardCardLink';
  cssClass?: Maybe<Scalars['String']['output']>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
};

/** An edge in a connection. */
export type CourseEdge = {
  __typename?: 'CourseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Course>;
};

/** Users in a course can be returned based on these enrollment states */
export enum CourseFilterableEnrollmentState {
  Active = 'active',
  Completed = 'completed',
  CreationPending = 'creation_pending',
  Inactive = 'inactive',
  Invited = 'invited',
  Rejected = 'rejected'
}

/** Users in a course can be returned based on these enrollment types */
export enum CourseFilterableEnrollmentType {
  DesignerEnrollment = 'DesignerEnrollment',
  ObserverEnrollment = 'ObserverEnrollment',
  StudentEnrollment = 'StudentEnrollment',
  StudentViewEnrollment = 'StudentViewEnrollment',
  TaEnrollment = 'TaEnrollment',
  TeacherEnrollment = 'TeacherEnrollment'
}

/** Grade statuses that can be applied to submissions in a course */
export enum CourseGradeStatus {
  Excused = 'excused',
  Extended = 'extended',
  Late = 'late',
  Missing = 'missing',
  None = 'none'
}

export type CourseOutcomeAlignmentStats = {
  __typename?: 'CourseOutcomeAlignmentStats';
  alignedArtifacts?: Maybe<Scalars['Int']['output']>;
  alignedOutcomes?: Maybe<Scalars['Int']['output']>;
  artifactAlignments?: Maybe<Scalars['Int']['output']>;
  totalAlignments?: Maybe<Scalars['Int']['output']>;
  totalArtifacts?: Maybe<Scalars['Int']['output']>;
  totalOutcomes?: Maybe<Scalars['Int']['output']>;
};

export type CoursePermissions = {
  __typename?: 'CoursePermissions';
  becomeUser?: Maybe<Scalars['Boolean']['output']>;
  manageGrades?: Maybe<Scalars['Boolean']['output']>;
  sendMessages?: Maybe<Scalars['Boolean']['output']>;
  viewAllGrades?: Maybe<Scalars['Boolean']['output']>;
  viewAnalytics?: Maybe<Scalars['Boolean']['output']>;
};

export type CourseProgression = {
  __typename?: 'CourseProgression';
  /** Modules are ordered by position */
  incompleteModulesConnection?: Maybe<ModuleProgressionConnection>;
  requirements: CourseRequirements;
};


export type CourseProgressionIncompleteModulesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CourseRequirements = {
  __typename?: 'CourseRequirements';
  completed: Scalars['Int']['output'];
  completionPercentage: Scalars['Float']['output'];
  total: Scalars['Int']['output'];
};

export type CourseSectionsFilter = {
  /** Only include sections associated with users assigned to this assignment */
  assignmentId?: InputMaybe<Scalars['ID']['input']>;
};

export type CourseUsersFilter = {
  /** Only return users with the specified enrollment role ids */
  enrollmentRoleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * only return users with the given enrollment state. defaults
   * to `invited`, `creation_pending`, `active`
   */
  enrollmentStates?: InputMaybe<Array<CourseFilterableEnrollmentState>>;
  /** Only return users with the specified enrollment types */
  enrollmentTypes?: InputMaybe<Array<CourseFilterableEnrollmentType>>;
  /** Exclude test students from results */
  excludeTestStudents?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Only return users that match the given search term. The search
   * term is matched against the user's name and depending on current
   * user permissions against the user's login id, email and sisid
   */
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  /** only include users with the given ids */
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Order direction for results */
export enum CourseUsersSortDirectionType {
  Asc = 'asc',
  Desc = 'desc'
}

/** Sort field for results */
export enum CourseUsersSortFieldType {
  LastActivityAt = 'last_activity_at',
  LoginId = 'login_id',
  Name = 'name',
  Role = 'role',
  SectionName = 'section_name',
  SisId = 'sis_id',
  TotalActivityTime = 'total_activity_time'
}

/** Specify sort field and direction for results */
export type CourseUsersSortInputType = {
  direction?: InputMaybe<CourseUsersSortDirectionType>;
  field: CourseUsersSortFieldType;
};

/** States that Courses can be in */
export enum CourseWorkflowState {
  Available = 'available',
  Claimed = 'claimed',
  Completed = 'completed',
  Created = 'created',
  Deleted = 'deleted'
}

/** Autogenerated input type of CreateAccountDomainLookup */
export type CreateAccountDomainLookupInput = {
  accountDomainId: Scalars['ID']['input'];
  authenticationProvider?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Autogenerated return type of CreateAccountDomainLookup. */
export type CreateAccountDomainLookupPayload = {
  __typename?: 'CreateAccountDomainLookupPayload';
  accountDomainLookup?: Maybe<AccountDomainLookup>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of CreateAssignment */
export type CreateAssignmentInput = {
  allowedAttempts?: InputMaybe<Scalars['Int']['input']>;
  allowedExtensions?: InputMaybe<Array<Scalars['String']['input']>>;
  /** requires anonymous_marking course feature to be set to true */
  anonymousGrading?: InputMaybe<Scalars['Boolean']['input']>;
  anonymousInstructorAnnotations?: InputMaybe<Scalars['Boolean']['input']>;
  assignmentGroupId?: InputMaybe<Scalars['ID']['input']>;
  assignmentOverrides?: InputMaybe<Array<AssignmentOverrideCreateOrUpdate>>;
  courseId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  dueAt?: InputMaybe<Scalars['DateTime']['input']>;
  forCheckpoints?: InputMaybe<Scalars['Boolean']['input']>;
  gradeGroupStudentsIndividually?: InputMaybe<Scalars['Boolean']['input']>;
  gradingStandardId?: InputMaybe<Scalars['ID']['input']>;
  gradingType?: InputMaybe<GradingType>;
  groupCategoryId?: InputMaybe<Scalars['ID']['input']>;
  groupSetId?: InputMaybe<Scalars['ID']['input']>;
  lockAt?: InputMaybe<Scalars['DateTime']['input']>;
  moderatedGrading?: InputMaybe<AssignmentModeratedGradingUpdate>;
  moduleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name: Scalars['String']['input'];
  omitFromFinalGrade?: InputMaybe<Scalars['Boolean']['input']>;
  onlyVisibleToOverrides?: InputMaybe<Scalars['Boolean']['input']>;
  peerReviews?: InputMaybe<AssignmentPeerReviewsUpdate>;
  pointsPossible?: InputMaybe<Scalars['Float']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  postToSis?: InputMaybe<Scalars['Boolean']['input']>;
  state?: InputMaybe<AssignmentState>;
  submissionTypes?: InputMaybe<Array<SubmissionType>>;
  unlockAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Autogenerated return type of CreateAssignment. */
export type CreateAssignmentPayload = {
  __typename?: 'CreateAssignmentPayload';
  assignment?: Maybe<Assignment>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of CreateCommentBankItem */
export type CreateCommentBankItemInput = {
  comment: Scalars['String']['input'];
  courseId: Scalars['ID']['input'];
};

/** Autogenerated return type of CreateCommentBankItem. */
export type CreateCommentBankItemPayload = {
  __typename?: 'CreateCommentBankItemPayload';
  commentBankItem?: Maybe<CommentBankItem>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of CreateConversation */
export type CreateConversationInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  body: Scalars['String']['input'];
  bulkMessage?: InputMaybe<Scalars['Boolean']['input']>;
  contextCode?: InputMaybe<Scalars['String']['input']>;
  conversationId?: InputMaybe<Scalars['ID']['input']>;
  forceNew?: InputMaybe<Scalars['Boolean']['input']>;
  groupConversation?: InputMaybe<Scalars['Boolean']['input']>;
  mediaCommentId?: InputMaybe<Scalars['ID']['input']>;
  mediaCommentType?: InputMaybe<Scalars['String']['input']>;
  recipients: Array<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Autogenerated return type of CreateConversation. */
export type CreateConversationPayload = {
  __typename?: 'CreateConversationPayload';
  conversations?: Maybe<Array<ConversationParticipant>>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of CreateDiscussionEntryDraft */
export type CreateDiscussionEntryDraftInput = {
  discussionEntryId?: InputMaybe<Scalars['ID']['input']>;
  discussionTopicId: Scalars['ID']['input'];
  fileId?: InputMaybe<Scalars['ID']['input']>;
  message: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated return type of CreateDiscussionEntryDraft. */
export type CreateDiscussionEntryDraftPayload = {
  __typename?: 'CreateDiscussionEntryDraftPayload';
  discussionEntryDraft?: Maybe<DiscussionEntryDraft>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of CreateDiscussionEntry */
export type CreateDiscussionEntryInput = {
  discussionTopicId: Scalars['ID']['input'];
  fileId?: InputMaybe<Scalars['ID']['input']>;
  isAnonymousAuthor?: InputMaybe<Scalars['Boolean']['input']>;
  message: Scalars['String']['input'];
  parentEntryId?: InputMaybe<Scalars['ID']['input']>;
  quotedEntryId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated return type of CreateDiscussionEntry. */
export type CreateDiscussionEntryPayload = {
  __typename?: 'CreateDiscussionEntryPayload';
  discussionEntry?: Maybe<DiscussionEntry>;
  errors?: Maybe<Array<ValidationError>>;
  mySubAssignmentSubmissions?: Maybe<Array<Submission>>;
};

/** Autogenerated input type of CreateDiscussionTopic */
export type CreateDiscussionTopicInput = {
  allowRating?: InputMaybe<Scalars['Boolean']['input']>;
  anonymousState?: InputMaybe<DiscussionTopicAnonymousStateType>;
  assignment?: InputMaybe<AssignmentCreate>;
  checkpoints?: InputMaybe<Array<DiscussionCheckpoints>>;
  contextId: Scalars['ID']['input'];
  contextType: DiscussionTopicContextType;
  delayedPostAt?: InputMaybe<Scalars['DateTime']['input']>;
  discussionType?: InputMaybe<DiscussionTopicDiscussionType>;
  expanded?: InputMaybe<Scalars['Boolean']['input']>;
  expandedLocked?: InputMaybe<Scalars['Boolean']['input']>;
  fileId?: InputMaybe<Scalars['ID']['input']>;
  groupCategoryId?: InputMaybe<Scalars['ID']['input']>;
  isAnnouncement?: InputMaybe<Scalars['Boolean']['input']>;
  isAnonymousAuthor?: InputMaybe<Scalars['Boolean']['input']>;
  lockAt?: InputMaybe<Scalars['DateTime']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  onlyGradersCanRate?: InputMaybe<Scalars['Boolean']['input']>;
  onlyVisibleToOverrides?: InputMaybe<Scalars['Boolean']['input']>;
  podcastEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  podcastHasStudentPosts?: InputMaybe<Scalars['Boolean']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  requireInitialPost?: InputMaybe<Scalars['Boolean']['input']>;
  sortOrder?: InputMaybe<DiscussionSortOrderType>;
  sortOrderLocked?: InputMaybe<Scalars['Boolean']['input']>;
  specificSections?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  todoDate?: InputMaybe<Scalars['DateTime']['input']>;
  ungradedDiscussionOverrides?: InputMaybe<Array<AssignmentOverrideCreateOrUpdate>>;
};

/** Autogenerated return type of CreateDiscussionTopic. */
export type CreateDiscussionTopicPayload = {
  __typename?: 'CreateDiscussionTopicPayload';
  discussionTopic?: Maybe<Discussion>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of CreateGroupInSet */
export type CreateGroupInSetInput = {
  groupSetId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  nonCollaborative?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated return type of CreateGroupInSet. */
export type CreateGroupInSetPayload = {
  __typename?: 'CreateGroupInSetPayload';
  errors?: Maybe<Array<ValidationError>>;
  group?: Maybe<Group>;
};

/** Autogenerated input type of CreateGroupSet */
export type CreateGroupSetInput = {
  assignAsync?: InputMaybe<Scalars['Boolean']['input']>;
  assignUnassignedMembers?: InputMaybe<Scalars['Boolean']['input']>;
  autoLeaderType?: InputMaybe<AutoLeaderType>;
  contextId: Scalars['ID']['input'];
  contextType: GroupSetContextType;
  createGroupCount?: InputMaybe<Scalars['Int']['input']>;
  createGroupMemberCount?: InputMaybe<Scalars['Int']['input']>;
  enableAutoLeader?: InputMaybe<Scalars['Boolean']['input']>;
  enableSelfSignup?: InputMaybe<Scalars['Boolean']['input']>;
  groupBySection?: InputMaybe<Scalars['Boolean']['input']>;
  groupLimit?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  nonCollaborative?: InputMaybe<Scalars['Boolean']['input']>;
  restrictSelfSignup?: InputMaybe<Scalars['Boolean']['input']>;
  selfSignup?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated return type of CreateGroupSet. */
export type CreateGroupSetPayload = {
  __typename?: 'CreateGroupSetPayload';
  errors?: Maybe<Array<ValidationError>>;
  groupSet?: Maybe<GroupSet>;
};

/** Autogenerated input type of CreateInternalSetting */
export type CreateInternalSettingInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** Autogenerated return type of CreateInternalSetting. */
export type CreateInternalSettingPayload = {
  __typename?: 'CreateInternalSettingPayload';
  errors?: Maybe<Array<ValidationError>>;
  internalSetting?: Maybe<InternalSetting>;
};

/** Autogenerated input type of CreateLearningOutcomeGroup */
export type CreateLearningOutcomeGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  vendorGuid?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of CreateLearningOutcomeGroup. */
export type CreateLearningOutcomeGroupPayload = {
  __typename?: 'CreateLearningOutcomeGroupPayload';
  errors?: Maybe<Array<ValidationError>>;
  learningOutcomeGroup?: Maybe<LearningOutcomeGroup>;
};

/** Autogenerated input type of CreateLearningOutcome */
export type CreateLearningOutcomeInput = {
  calculationInt?: InputMaybe<Scalars['Int']['input']>;
  calculationMethod?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['ID']['input'];
  masteryPoints?: InputMaybe<Scalars['Float']['input']>;
  ratings?: InputMaybe<Array<ProficiencyRatingInput>>;
  title: Scalars['String']['input'];
  vendorGuid?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of CreateLearningOutcome. */
export type CreateLearningOutcomePayload = {
  __typename?: 'CreateLearningOutcomePayload';
  errors?: Maybe<Array<ValidationError>>;
  learningOutcome?: Maybe<LearningOutcome>;
};

/** Autogenerated input type of CreateModule */
export type CreateModuleInput = {
  courseId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

/** Autogenerated return type of CreateModule. */
export type CreateModulePayload = {
  __typename?: 'CreateModulePayload';
  errors?: Maybe<Array<ValidationError>>;
  module?: Maybe<Module>;
};

/** Autogenerated input type of CreateOutcomeCalculationMethod */
export type CreateOutcomeCalculationMethodInput = {
  calculationInt?: InputMaybe<Scalars['Int']['input']>;
  calculationMethod: Scalars['String']['input'];
  contextId: Scalars['ID']['input'];
  contextType: Scalars['String']['input'];
};

/** Autogenerated return type of CreateOutcomeCalculationMethod. */
export type CreateOutcomeCalculationMethodPayload = {
  __typename?: 'CreateOutcomeCalculationMethodPayload';
  errors?: Maybe<Array<ValidationError>>;
  outcomeCalculationMethod?: Maybe<OutcomeCalculationMethod>;
};

/** Autogenerated input type of CreateOutcomeProficiency */
export type CreateOutcomeProficiencyInput = {
  contextId: Scalars['ID']['input'];
  contextType: Scalars['String']['input'];
  proficiencyRatings: Array<OutcomeProficiencyRatingCreate>;
};

/** Autogenerated return type of CreateOutcomeProficiency. */
export type CreateOutcomeProficiencyPayload = {
  __typename?: 'CreateOutcomeProficiencyPayload';
  errors?: Maybe<Array<ValidationError>>;
  outcomeProficiency?: Maybe<OutcomeProficiency>;
};

/** Autogenerated input type of CreateSubmissionComment */
export type CreateSubmissionCommentInput = {
  attempt?: InputMaybe<Scalars['Int']['input']>;
  comment: Scalars['String']['input'];
  draftComment?: InputMaybe<Scalars['Boolean']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Post comment to entire group (only relevant for group assignments grading students individually) */
  groupComment?: InputMaybe<Scalars['Boolean']['input']>;
  mediaObjectId?: InputMaybe<Scalars['ID']['input']>;
  mediaObjectType?: InputMaybe<Scalars['String']['input']>;
  reviewerSubmissionId?: InputMaybe<Scalars['ID']['input']>;
  submissionId: Scalars['ID']['input'];
};

/** Autogenerated return type of CreateSubmissionComment. */
export type CreateSubmissionCommentPayload = {
  __typename?: 'CreateSubmissionCommentPayload';
  errors?: Maybe<Array<ValidationError>>;
  submissionComment?: Maybe<SubmissionComment>;
};

/** Autogenerated input type of CreateSubmissionDraft */
export type CreateSubmissionDraftInput = {
  activeSubmissionType: DraftableSubmissionType;
  attempt?: InputMaybe<Scalars['Int']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  externalToolId?: InputMaybe<Scalars['ID']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ltiLaunchUrl?: InputMaybe<Scalars['String']['input']>;
  mediaId?: InputMaybe<Scalars['ID']['input']>;
  resourceLinkLookupUuid?: InputMaybe<Scalars['String']['input']>;
  submissionId: Scalars['ID']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of CreateSubmissionDraft. */
export type CreateSubmissionDraftPayload = {
  __typename?: 'CreateSubmissionDraftPayload';
  errors?: Maybe<Array<ValidationError>>;
  submissionDraft?: Maybe<SubmissionDraft>;
};

/** Autogenerated input type of CreateSubmission */
export type CreateSubmissionInput = {
  annotatableAttachmentId?: InputMaybe<Scalars['ID']['input']>;
  assignmentId: Scalars['ID']['input'];
  body?: InputMaybe<Scalars['String']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  mediaId?: InputMaybe<Scalars['ID']['input']>;
  resourceLinkLookupUuid?: InputMaybe<Scalars['String']['input']>;
  studentId?: InputMaybe<Scalars['ID']['input']>;
  submissionType: OnlineSubmissionType;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of CreateSubmission. */
export type CreateSubmissionPayload = {
  __typename?: 'CreateSubmissionPayload';
  errors?: Maybe<Array<ValidationError>>;
  submission?: Maybe<Submission>;
};

/** Autogenerated input type of CreateUserInboxLabel */
export type CreateUserInboxLabelInput = {
  names: Array<Scalars['String']['input']>;
};

/** Autogenerated return type of CreateUserInboxLabel. */
export type CreateUserInboxLabelPayload = {
  __typename?: 'CreateUserInboxLabelPayload';
  errors?: Maybe<Array<ValidationError>>;
  inboxLabels?: Maybe<Array<Scalars['String']['output']>>;
};

export type CustomGradeStatus = LegacyIdInterface & Node & {
  __typename?: 'CustomGradeStatus';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  color: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** The connection type for CustomGradeStatus. */
export type CustomGradeStatusConnection = {
  __typename?: 'CustomGradeStatusConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CustomGradeStatusEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CustomGradeStatus>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CustomGradeStatusEdge = {
  __typename?: 'CustomGradeStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<CustomGradeStatus>;
};

export type DashboardObserveeFilter = {
  /** Only view filtered user */
  observedUserId?: InputMaybe<Scalars['ID']['input']>;
};

/** a range of datetimes */
export type DateTimeRange = {
  end?: InputMaybe<Scalars['DateTime']['input']>;
  start?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Autogenerated input type of DeleteAccountDomainLookup */
export type DeleteAccountDomainLookupInput = {
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of DeleteAccountDomainLookup. */
export type DeleteAccountDomainLookupPayload = {
  __typename?: 'DeleteAccountDomainLookupPayload';
  accountDomainLookupId?: Maybe<Scalars['ID']['output']>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DeleteCommentBankItem */
export type DeleteCommentBankItemInput = {
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of DeleteCommentBankItem. */
export type DeleteCommentBankItemPayload = {
  __typename?: 'DeleteCommentBankItemPayload';
  commentBankItemId: Scalars['ID']['output'];
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DeleteConversationMessages */
export type DeleteConversationMessagesInput = {
  ids: Array<Scalars['ID']['input']>;
};

/** Autogenerated return type of DeleteConversationMessages. */
export type DeleteConversationMessagesPayload = {
  __typename?: 'DeleteConversationMessagesPayload';
  conversationMessageIds: Array<Scalars['ID']['output']>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DeleteConversations */
export type DeleteConversationsInput = {
  ids: Array<Scalars['ID']['input']>;
};

/** Autogenerated return type of DeleteConversations. */
export type DeleteConversationsPayload = {
  __typename?: 'DeleteConversationsPayload';
  conversationIds?: Maybe<Array<Scalars['ID']['output']>>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DeleteCustomGradeStatus */
export type DeleteCustomGradeStatusInput = {
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of DeleteCustomGradeStatus. */
export type DeleteCustomGradeStatusPayload = {
  __typename?: 'DeleteCustomGradeStatusPayload';
  customGradeStatusId?: Maybe<Scalars['ID']['output']>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DeleteDiscussionEntry */
export type DeleteDiscussionEntryInput = {
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of DeleteDiscussionEntry. */
export type DeleteDiscussionEntryPayload = {
  __typename?: 'DeleteDiscussionEntryPayload';
  discussionEntry?: Maybe<DiscussionEntry>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DeleteDiscussionTopic */
export type DeleteDiscussionTopicInput = {
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of DeleteDiscussionTopic. */
export type DeleteDiscussionTopicPayload = {
  __typename?: 'DeleteDiscussionTopicPayload';
  discussionTopicId: Scalars['ID']['output'];
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DeleteInternalSetting */
export type DeleteInternalSettingInput = {
  internalSettingId: Scalars['ID']['input'];
};

/** Autogenerated return type of DeleteInternalSetting. */
export type DeleteInternalSettingPayload = {
  __typename?: 'DeleteInternalSettingPayload';
  errors?: Maybe<Array<ValidationError>>;
  internalSettingId: Scalars['ID']['output'];
};

/** Autogenerated input type of DeleteOutcomeCalculationMethod */
export type DeleteOutcomeCalculationMethodInput = {
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of DeleteOutcomeCalculationMethod. */
export type DeleteOutcomeCalculationMethodPayload = {
  __typename?: 'DeleteOutcomeCalculationMethodPayload';
  errors?: Maybe<Array<ValidationError>>;
  outcomeCalculationMethodId: Scalars['ID']['output'];
};

/** Autogenerated input type of DeleteOutcomeLinks */
export type DeleteOutcomeLinksInput = {
  ids: Array<Scalars['ID']['input']>;
};

/** Autogenerated return type of DeleteOutcomeLinks. */
export type DeleteOutcomeLinksPayload = {
  __typename?: 'DeleteOutcomeLinksPayload';
  deletedOutcomeLinkIds: Array<Scalars['ID']['output']>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DeleteOutcomeProficiency */
export type DeleteOutcomeProficiencyInput = {
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of DeleteOutcomeProficiency. */
export type DeleteOutcomeProficiencyPayload = {
  __typename?: 'DeleteOutcomeProficiencyPayload';
  errors?: Maybe<Array<ValidationError>>;
  outcomeProficiencyId: Scalars['ID']['output'];
};

/** Autogenerated input type of DeleteSubmissionComment */
export type DeleteSubmissionCommentInput = {
  submissionCommentId: Scalars['ID']['input'];
};

/** Autogenerated return type of DeleteSubmissionComment. */
export type DeleteSubmissionCommentPayload = {
  __typename?: 'DeleteSubmissionCommentPayload';
  errors?: Maybe<Array<ValidationError>>;
  submissionComment?: Maybe<SubmissionComment>;
};

/** Autogenerated input type of DeleteSubmissionDraft */
export type DeleteSubmissionDraftInput = {
  submissionId: Scalars['ID']['input'];
};

/** Autogenerated return type of DeleteSubmissionDraft. */
export type DeleteSubmissionDraftPayload = {
  __typename?: 'DeleteSubmissionDraftPayload';
  errors?: Maybe<Array<ValidationError>>;
  submissionDraftIds?: Maybe<Array<Scalars['ID']['output']>>;
};

/** Autogenerated input type of DeleteUserInboxLabel */
export type DeleteUserInboxLabelInput = {
  names: Array<Scalars['String']['input']>;
};

/** Autogenerated return type of DeleteUserInboxLabel. */
export type DeleteUserInboxLabelPayload = {
  __typename?: 'DeleteUserInboxLabelPayload';
  errors?: Maybe<Array<ValidationError>>;
  inboxLabels?: Maybe<Array<Scalars['String']['output']>>;
};

export type Discussion = LegacyIdInterface & ModuleItemInterface & Node & Timestamped & {
  __typename?: 'Discussion';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  allowRating?: Maybe<Scalars['Boolean']['output']>;
  anonymousAuthor?: Maybe<AnonymousUser>;
  anonymousState?: Maybe<DiscussionTopicAnonymousStateType>;
  assignment?: Maybe<Assignment>;
  attachment?: Maybe<File>;
  author?: Maybe<User>;
  availableForUser: Scalars['Boolean']['output'];
  canDuplicate?: Maybe<Scalars['Boolean']['output']>;
  canGroup?: Maybe<Scalars['Boolean']['output']>;
  canReplyAnonymously: Scalars['Boolean']['output'];
  canUnpublish: Scalars['Boolean']['output'];
  childTopics?: Maybe<Array<Discussion>>;
  contextId: Scalars['ID']['output'];
  contextName?: Maybe<Scalars['String']['output']>;
  contextType: Scalars['String']['output'];
  courseSections: Array<Section>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  delayedPostAt?: Maybe<Scalars['DateTime']['output']>;
  discussionEntriesConnection?: Maybe<DiscussionEntryConnection>;
  discussionEntryDraftsConnection?: Maybe<DiscussionEntryDraftConnection>;
  discussionType?: Maybe<DiscussionTopicDiscussionType>;
  editedAt?: Maybe<Scalars['DateTime']['output']>;
  editor?: Maybe<User>;
  entriesTotalPages?: Maybe<Scalars['Int']['output']>;
  entryCounts?: Maybe<DiscussionEntryCounts>;
  expanded?: Maybe<Scalars['Boolean']['output']>;
  expandedLocked?: Maybe<Scalars['Boolean']['output']>;
  graded?: Maybe<Scalars['Boolean']['output']>;
  groupSet?: Maybe<GroupSet>;
  id: Scalars['ID']['output'];
  initialPostRequiredForCurrentUser: Scalars['Boolean']['output'];
  isAnnouncement: Scalars['Boolean']['output'];
  isAnonymousAuthor?: Maybe<Scalars['Boolean']['output']>;
  isLockedByMasterCourse: Scalars['Boolean']['output'];
  isSectionSpecific?: Maybe<Scalars['Boolean']['output']>;
  lastReplyAt?: Maybe<Scalars['DateTime']['output']>;
  lockAt?: Maybe<Scalars['DateTime']['output']>;
  lockInformation?: Maybe<Scalars['String']['output']>;
  locked: Scalars['Boolean']['output'];
  mentionableUsersConnection?: Maybe<MessageableUserConnection>;
  message?: Maybe<Scalars['String']['output']>;
  modules?: Maybe<Array<Module>>;
  onlyGradersCanRate?: Maybe<Scalars['Boolean']['output']>;
  onlyVisibleToOverrides?: Maybe<Scalars['Boolean']['output']>;
  participant?: Maybe<DiscussionParticipant>;
  permissions?: Maybe<DiscussionPermissions>;
  podcastEnabled?: Maybe<Scalars['Boolean']['output']>;
  podcastHasStudentPosts?: Maybe<Scalars['Boolean']['output']>;
  pointsPossible?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  postedAt?: Maybe<Scalars['DateTime']['output']>;
  published: Scalars['Boolean']['output'];
  replyToEntryRequiredCount: Scalars['Int']['output'];
  requireInitialPost?: Maybe<Scalars['Boolean']['output']>;
  rootEntriesTotalPages?: Maybe<Scalars['Int']['output']>;
  rootTopic?: Maybe<Discussion>;
  searchEntryCount?: Maybe<Scalars['Int']['output']>;
  sortByRating?: Maybe<Scalars['Boolean']['output']>;
  sortOrder?: Maybe<DiscussionSortOrderType>;
  sortOrderLocked?: Maybe<Scalars['Boolean']['output']>;
  subscribed: Scalars['Boolean']['output'];
  subscriptionDisabledForUser?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  todoDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  ungradedDiscussionOverrides?: Maybe<AssignmentOverrideConnection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userCount?: Maybe<Scalars['Int']['output']>;
  visibleToEveryone?: Maybe<Scalars['Boolean']['output']>;
};


export type DiscussionAuthorArgs = {
  builtInOnly?: InputMaybe<Scalars['Boolean']['input']>;
  courseId?: InputMaybe<Scalars['String']['input']>;
  roleTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type DiscussionDiscussionEntriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DiscussionFilterType>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  rootEntries?: InputMaybe<Scalars['Boolean']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  unreadBefore?: InputMaybe<Scalars['String']['input']>;
  userSearchId?: InputMaybe<Scalars['String']['input']>;
};


export type DiscussionDiscussionEntryDraftsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type DiscussionEditorArgs = {
  builtInOnly?: InputMaybe<Scalars['Boolean']['input']>;
  courseId?: InputMaybe<Scalars['String']['input']>;
  roleTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type DiscussionEntriesTotalPagesArgs = {
  filter?: InputMaybe<DiscussionFilterType>;
  perPage: Scalars['Int']['input'];
  rootEntries?: InputMaybe<Scalars['Boolean']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<DiscussionSortOrderType>;
  unreadBefore?: InputMaybe<Scalars['String']['input']>;
};


export type DiscussionMentionableUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};


export type DiscussionRootEntriesTotalPagesArgs = {
  filter?: InputMaybe<DiscussionFilterType>;
  perPage: Scalars['Int']['input'];
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<DiscussionSortOrderType>;
};


export type DiscussionSearchEntryCountArgs = {
  filter?: InputMaybe<DiscussionFilterType>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};


export type DiscussionSortOrderArgs = {
  sort?: InputMaybe<DiscussionSortOrderType>;
};


export type DiscussionUngradedDiscussionOverridesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DiscussionCheckpointDate = {
  dueAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lockAt?: InputMaybe<Scalars['DateTime']['input']>;
  setId?: InputMaybe<Scalars['Int']['input']>;
  setType?: InputMaybe<DiscussionCheckpointDateSetType>;
  studentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  type: DiscussionCheckpointDateType;
  unlockAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Types of date set that can be set for discussion checkpoints */
export enum DiscussionCheckpointDateSetType {
  Adhoc = 'ADHOC',
  Course = 'Course',
  CourseSection = 'CourseSection',
  Group = 'Group'
}

/** Types of dates that can be set for discussion checkpoints */
export enum DiscussionCheckpointDateType {
  Everyone = 'everyone',
  Override = 'override'
}

export type DiscussionCheckpoints = {
  checkpointLabel: CheckpointLabelType;
  dates: Array<DiscussionCheckpointDate>;
  pointsPossible: Scalars['Float']['input'];
  repliesRequired?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for Discussion. */
export type DiscussionConnection = {
  __typename?: 'DiscussionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DiscussionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Discussion>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DiscussionEdge = {
  __typename?: 'DiscussionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Discussion>;
};

export type DiscussionEntry = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'DiscussionEntry';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  allRootEntries?: Maybe<Array<DiscussionEntry>>;
  anonymousAuthor?: Maybe<AnonymousUser>;
  attachment?: Maybe<File>;
  author?: Maybe<User>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  depth?: Maybe<Scalars['Int']['output']>;
  discussionEntryVersions?: Maybe<Array<DiscussionEntryVersion>>;
  discussionSubentriesConnection?: Maybe<DiscussionEntryConnection>;
  discussionTopic: Discussion;
  discussionTopicId: Scalars['ID']['output'];
  editedAt?: Maybe<Scalars['DateTime']['output']>;
  editor?: Maybe<User>;
  entryParticipant?: Maybe<EntryParticipant>;
  id: Scalars['ID']['output'];
  lastReply?: Maybe<DiscussionEntry>;
  message?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['ID']['output']>;
  permissions?: Maybe<DiscussionEntryPermissions>;
  previewMessage?: Maybe<Scalars['String']['output']>;
  quotedEntry?: Maybe<DiscussionEntry>;
  ratingCount?: Maybe<Scalars['Int']['output']>;
  ratingSum?: Maybe<Scalars['Int']['output']>;
  reportTypeCounts?: Maybe<DiscussionEntryReportTypeCounts>;
  rootEntry?: Maybe<DiscussionEntry>;
  rootEntryId?: Maybe<Scalars['ID']['output']>;
  rootEntryPageNumber?: Maybe<Scalars['Int']['output']>;
  rootEntryParticipantCounts?: Maybe<DiscussionEntryCounts>;
  subentriesCount?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type DiscussionEntryAuthorArgs = {
  builtInOnly?: InputMaybe<Scalars['Boolean']['input']>;
  courseId?: InputMaybe<Scalars['String']['input']>;
  roleTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type DiscussionEntryDiscussionSubentriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  beforeRelativeEntry?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRelativeEntry?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  relativeEntryId?: InputMaybe<Scalars['ID']['input']>;
  sortOrder?: InputMaybe<DiscussionSortOrderType>;
};


export type DiscussionEntryEditorArgs = {
  builtInOnly?: InputMaybe<Scalars['Boolean']['input']>;
  courseId?: InputMaybe<Scalars['String']['input']>;
  roleTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type DiscussionEntryRootEntryPageNumberArgs = {
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for DiscussionEntry. */
export type DiscussionEntryConnection = {
  __typename?: 'DiscussionEntryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DiscussionEntryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<DiscussionEntry>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DiscussionEntryCounts = {
  __typename?: 'DiscussionEntryCounts';
  deletedCount: Scalars['Int']['output'];
  repliesCount: Scalars['Int']['output'];
  unreadCount: Scalars['Int']['output'];
};

export type DiscussionEntryDraft = LegacyIdInterface & Timestamped & {
  __typename?: 'DiscussionEntryDraft';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  attachment?: Maybe<File>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  discussionEntryId?: Maybe<Scalars['ID']['output']>;
  discussionTopicId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  parentId?: Maybe<Scalars['ID']['output']>;
  rootEntryId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** The connection type for DiscussionEntryDraft. */
export type DiscussionEntryDraftConnection = {
  __typename?: 'DiscussionEntryDraftConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DiscussionEntryDraftEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<DiscussionEntryDraft>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DiscussionEntryDraftEdge = {
  __typename?: 'DiscussionEntryDraftEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<DiscussionEntryDraft>;
};

/** An edge in a connection. */
export type DiscussionEntryEdge = {
  __typename?: 'DiscussionEntryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<DiscussionEntry>;
};

export type DiscussionEntryPermissions = {
  __typename?: 'DiscussionEntryPermissions';
  attach?: Maybe<Scalars['Boolean']['output']>;
  create?: Maybe<Scalars['Boolean']['output']>;
  delete?: Maybe<Scalars['Boolean']['output']>;
  rate?: Maybe<Scalars['Boolean']['output']>;
  read?: Maybe<Scalars['Boolean']['output']>;
  reply?: Maybe<Scalars['Boolean']['output']>;
  update?: Maybe<Scalars['Boolean']['output']>;
  viewRating?: Maybe<Scalars['Boolean']['output']>;
};

export type DiscussionEntryReportTypeCounts = {
  __typename?: 'DiscussionEntryReportTypeCounts';
  inappropriateCount: Scalars['Int']['output'];
  offensiveCount: Scalars['Int']['output'];
  otherCount: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type DiscussionEntryVersion = LegacyIdInterface & Timestamped & {
  __typename?: 'DiscussionEntryVersion';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Int']['output'];
};

export type DiscussionFilter = {
  /** only return discussions whose title matches this search term */
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  /**
   * only return discussions for the given user. Defaults to
   * the current user.
   */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Search types that can be associated with discussions */
export enum DiscussionFilterType {
  All = 'all',
  Deleted = 'deleted',
  Drafts = 'drafts',
  Unread = 'unread'
}

export type DiscussionParticipant = {
  __typename?: 'DiscussionParticipant';
  expanded?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  sortOrder?: Maybe<DiscussionSortOrderType>;
  summaryEnabled?: Maybe<Scalars['Boolean']['output']>;
};

export type DiscussionPermissions = {
  __typename?: 'DiscussionPermissions';
  addRubric?: Maybe<Scalars['Boolean']['output']>;
  attach?: Maybe<Scalars['Boolean']['output']>;
  closeForComments?: Maybe<Scalars['Boolean']['output']>;
  copyAndSendTo?: Maybe<Scalars['Boolean']['output']>;
  create?: Maybe<Scalars['Boolean']['output']>;
  delete?: Maybe<Scalars['Boolean']['output']>;
  duplicate?: Maybe<Scalars['Boolean']['output']>;
  manageAssignTo?: Maybe<Scalars['Boolean']['output']>;
  manageCourseContentAdd?: Maybe<Scalars['Boolean']['output']>;
  manageCourseContentDelete?: Maybe<Scalars['Boolean']['output']>;
  manageCourseContentEdit?: Maybe<Scalars['Boolean']['output']>;
  moderateForum?: Maybe<Scalars['Boolean']['output']>;
  openForComments?: Maybe<Scalars['Boolean']['output']>;
  peerReview?: Maybe<Scalars['Boolean']['output']>;
  rate?: Maybe<Scalars['Boolean']['output']>;
  read?: Maybe<Scalars['Boolean']['output']>;
  readAsAdmin?: Maybe<Scalars['Boolean']['output']>;
  readReplies?: Maybe<Scalars['Boolean']['output']>;
  reply?: Maybe<Scalars['Boolean']['output']>;
  showRubric?: Maybe<Scalars['Boolean']['output']>;
  speedGrader?: Maybe<Scalars['Boolean']['output']>;
  studentReporting?: Maybe<Scalars['Boolean']['output']>;
  update?: Maybe<Scalars['Boolean']['output']>;
};

export enum DiscussionSortOrderType {
  Asc = 'asc',
  Desc = 'desc'
}

/** Anonymous states for discussionTopics */
export enum DiscussionTopicAnonymousStateType {
  FullAnonymity = 'full_anonymity',
  Off = 'off',
  PartialAnonymity = 'partial_anonymity'
}

/** Context types that can be associated with discussionTopics */
export enum DiscussionTopicContextType {
  Course = 'Course',
  Group = 'Group'
}

/** Discussion type for discussionTopics */
export enum DiscussionTopicDiscussionType {
  Flat = 'flat',
  NotThreaded = 'not_threaded',
  SideComment = 'side_comment',
  Threaded = 'threaded'
}

export type DiscussionsConnectionInterface = {
  /** returns a list of discussions. */
  discussionsConnection?: Maybe<DiscussionConnection>;
};


export type DiscussionsConnectionInterfaceDiscussionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DiscussionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Types of submissions that can have a submission draft */
export enum DraftableSubmissionType {
  BasicLtiLaunch = 'basic_lti_launch',
  MediaRecording = 'media_recording',
  OnlineTextEntry = 'online_text_entry',
  OnlineUpload = 'online_upload',
  OnlineUrl = 'online_url',
  StudentAnnotation = 'student_annotation'
}

export type Enrollment = AssetString & Node & Timestamped & {
  __typename?: 'Enrollment';
  /** legacy canvas id */
  _id?: Maybe<Scalars['ID']['output']>;
  assetString?: Maybe<Scalars['String']['output']>;
  associatedUser?: Maybe<User>;
  canBeRemoved?: Maybe<Scalars['Boolean']['output']>;
  concluded?: Maybe<Scalars['Boolean']['output']>;
  course?: Maybe<Course>;
  courseSectionId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  grades?: Maybe<Grades>;
  htmlUrl?: Maybe<Scalars['URL']['output']>;
  id: Scalars['ID']['output'];
  lastActivityAt?: Maybe<Scalars['DateTime']['output']>;
  limitPrivilegesToCourseSection?: Maybe<Scalars['Boolean']['output']>;
  section?: Maybe<Section>;
  sisImportId?: Maybe<Scalars['ID']['output']>;
  sisRole?: Maybe<Scalars['String']['output']>;
  state: EnrollmentWorkflowState;
  totalActivityTime?: Maybe<Scalars['Int']['output']>;
  type: EnrollmentType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};


export type EnrollmentGradesArgs = {
  gradingPeriodId?: InputMaybe<Scalars['ID']['input']>;
};

/** The connection type for Enrollment. */
export type EnrollmentConnection = {
  __typename?: 'EnrollmentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EnrollmentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Enrollment>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EnrollmentEdge = {
  __typename?: 'EnrollmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Enrollment>;
};

export type EnrollmentFilterInput = {
  associatedUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  states?: InputMaybe<Array<EnrollmentWorkflowState>>;
  types?: InputMaybe<Array<EnrollmentType>>;
};

export enum EnrollmentType {
  DesignerEnrollment = 'DesignerEnrollment',
  ObserverEnrollment = 'ObserverEnrollment',
  StudentEnrollment = 'StudentEnrollment',
  StudentViewEnrollment = 'StudentViewEnrollment',
  TaEnrollment = 'TaEnrollment',
  TeacherEnrollment = 'TeacherEnrollment'
}

export enum EnrollmentWorkflowState {
  Active = 'active',
  Completed = 'completed',
  CreationPending = 'creation_pending',
  Deleted = 'deleted',
  Inactive = 'inactive',
  Invited = 'invited',
  Rejected = 'rejected'
}

/** Order direction for enrollments */
export enum EnrollmentsSortDirectionType {
  Asc = 'asc',
  Desc = 'desc'
}

/** Sort field for enrollments */
export enum EnrollmentsSortFieldType {
  LastActivityAt = 'last_activity_at',
  Role = 'role',
  SectionName = 'section_name'
}

/** Specify sort field and direction for enrollments */
export type EnrollmentsSortInputType = {
  direction?: InputMaybe<EnrollmentsSortDirectionType>;
  field: EnrollmentsSortFieldType;
};

export type EntryParticipant = {
  __typename?: 'EntryParticipant';
  forcedReadState?: Maybe<Scalars['Boolean']['output']>;
  rating?: Maybe<Scalars['Boolean']['output']>;
  read: Scalars['Boolean']['output'];
  reportType?: Maybe<Scalars['String']['output']>;
};

export type ExternalTool = LegacyIdInterface & ModuleItemInterface & Timestamped & {
  __typename?: 'ExternalTool';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  canDuplicate?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the module item can be unpublished */
  canUnpublish?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  graded?: Maybe<Scalars['Boolean']['output']>;
  isLockedByMasterCourse: Scalars['Boolean']['output'];
  labelFor?: Maybe<Scalars['String']['output']>;
  modules?: Maybe<Array<Module>>;
  name?: Maybe<Scalars['String']['output']>;
  pointsPossible?: Maybe<Scalars['Float']['output']>;
  /** Whether the module item is published */
  published?: Maybe<Scalars['Boolean']['output']>;
  settings?: Maybe<ExternalToolSettings>;
  state?: Maybe<ExternalToolState>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
};


export type ExternalToolLabelForArgs = {
  placement: ExternalToolPlacement;
};

/** The connection type for ExternalTool. */
export type ExternalToolConnection = {
  __typename?: 'ExternalToolConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ExternalToolEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ExternalTool>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ExternalToolEdge = {
  __typename?: 'ExternalToolEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ExternalTool>;
};

export type ExternalToolFilterInput = {
  placement?: InputMaybe<ExternalToolPlacement>;
  state?: InputMaybe<ExternalToolState>;
};

/** Placements that an External Tool can have */
export enum ExternalToolPlacement {
  ActivityAssetProcessor = 'ActivityAssetProcessor',
  HomeworkSubmission = 'homework_submission'
}

export type ExternalToolPlacements = {
  __typename?: 'ExternalToolPlacements';
  canvasIconClass?: Maybe<Scalars['String']['output']>;
  iconUrl?: Maybe<Scalars['URL']['output']>;
  messageType?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
};

export type ExternalToolSettings = {
  __typename?: 'ExternalToolSettings';
  homeworkSubmission?: Maybe<ExternalToolPlacements>;
  iconUrl?: Maybe<Scalars['URL']['output']>;
  selectionHeight?: Maybe<Scalars['Int']['output']>;
  selectionWidth?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

/** States that an External Tool can be in */
export enum ExternalToolState {
  Anonymous = 'anonymous',
  EmailOnly = 'email_only',
  NameOnly = 'name_only',
  Public = 'public'
}

export type ExternalUrl = LegacyIdInterface & ModuleItemInterface & Timestamped & {
  __typename?: 'ExternalUrl';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  canDuplicate?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the module item can be unpublished */
  canUnpublish?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  graded?: Maybe<Scalars['Boolean']['output']>;
  isLockedByMasterCourse: Scalars['Boolean']['output'];
  modules?: Maybe<Array<Module>>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  pointsPossible?: Maybe<Scalars['Float']['output']>;
  /** Whether the module item is published */
  published?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type File = LegacyIdInterface & ModuleItemInterface & Node & Timestamped & {
  __typename?: 'File';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  canDuplicate?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the module item can be unpublished */
  canUnpublish?: Maybe<Scalars['Boolean']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fileState?: Maybe<Scalars['String']['output']>;
  graded?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isLockedByMasterCourse: Scalars['Boolean']['output'];
  lockAt?: Maybe<Scalars['DateTime']['output']>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  mimeClass?: Maybe<Scalars['String']['output']>;
  modules?: Maybe<Array<Module>>;
  pointsPossible?: Maybe<Scalars['Float']['output']>;
  /** Whether the module item is published */
  published?: Maybe<Scalars['Boolean']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  submissionPreviewUrl?: Maybe<Scalars['URL']['output']>;
  thumbnailUrl?: Maybe<Scalars['URL']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unlockAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
  usageRights?: Maybe<UsageRights>;
  wordCount?: Maybe<Scalars['Int']['output']>;
};


export type FileSubmissionPreviewUrlArgs = {
  submissionId?: InputMaybe<Scalars['ID']['input']>;
};

/** The connection type for File. */
export type FileConnection = {
  __typename?: 'FileConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FileEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<File>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type FileEdge = {
  __typename?: 'FileEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<File>;
};

export type FileFilter = {
  /** only return files whose name matches this search term */
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  /**
   * only return files for the given user. Defaults to
   * the current user.
   */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type FilesConnectionInterface = {
  /** returns a list of files. */
  filesConnection?: Maybe<FileConnection>;
};


export type FilesConnectionInterfaceFilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Folder = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'Folder';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  canUpload: Scalars['Boolean']['output'];
  contextId: Scalars['ID']['output'];
  contextType: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentlyLocked: Scalars['Boolean']['output'];
  files?: Maybe<Array<File>>;
  filesCount: Scalars['Int']['output'];
  foldersCount: Scalars['Int']['output'];
  fullName: Scalars['String']['output'];
  hidden?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  lockAt?: Maybe<Scalars['DateTime']['output']>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  parentFolder?: Maybe<Folder>;
  parentFolderId?: Maybe<Scalars['ID']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  rootFolder: Scalars['Boolean']['output'];
  subFolders?: Maybe<Array<Folder>>;
  unlockAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** The connection type for Folder. */
export type FolderConnection = {
  __typename?: 'FolderConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FolderEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Folder>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type FolderEdge = {
  __typename?: 'FolderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Folder>;
};

export enum GradeState {
  Active = 'active',
  Deleted = 'deleted'
}

/** Contains grade information for a course or grading period */
export type Grades = {
  __typename?: 'Grades';
  assignmentGroup?: Maybe<AssignmentGroup>;
  currentGrade?: Maybe<Scalars['String']['output']>;
  /** The current score includes all graded assignments, excluding muted submissions. */
  currentScore?: Maybe<Scalars['Float']['output']>;
  customGradeStatusId?: Maybe<Scalars['ID']['output']>;
  enrollment?: Maybe<Enrollment>;
  finalGrade?: Maybe<Scalars['String']['output']>;
  /**
   * The final score includes all assignments, excluding muted submissions
   * (ungraded assignments are counted as 0 points).
   */
  finalScore?: Maybe<Scalars['Float']['output']>;
  gradingPeriod?: Maybe<GradingPeriod>;
  /** The override grade. Supersedes the computed final grade if set. */
  overrideGrade?: Maybe<Scalars['String']['output']>;
  /** The override score. Supersedes the computed final score if set. */
  overrideScore?: Maybe<Scalars['Float']['output']>;
  state: GradeState;
  unpostedCurrentGrade?: Maybe<Scalars['String']['output']>;
  /** The current score includes all graded assignments, including muted submissions. */
  unpostedCurrentScore?: Maybe<Scalars['Float']['output']>;
  unpostedFinalGrade?: Maybe<Scalars['String']['output']>;
  /**
   * The final score includes all assignments, including muted submissions
   * (ungraded assignments are counted as 0 points).
   */
  unpostedFinalScore?: Maybe<Scalars['Float']['output']>;
};

/** The connection type for Grades. */
export type GradesConnection = {
  __typename?: 'GradesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GradesEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Grades>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type GradesEdge = {
  __typename?: 'GradesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Grades>;
};

export type GradesEnrollmentFilter = {
  /** only include users with the given enrollment ids */
  enrollmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type GradingPeriod = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'GradingPeriod';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  /** assignments can only be graded before the grading period closes */
  closeDate?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  displayTotals: Scalars['Boolean']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isClosed: Scalars['Boolean']['output'];
  isLast: Scalars['Boolean']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * used to calculate how much the assignments in this grading period
   * contribute to the overall grade
   */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** The connection type for GradingPeriod. */
export type GradingPeriodConnection = {
  __typename?: 'GradingPeriodConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GradingPeriodEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GradingPeriod>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type GradingPeriodEdge = {
  __typename?: 'GradingPeriodEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<GradingPeriod>;
};

export type GradingPeriodGroup = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'GradingPeriodGroup';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  displayTotals: Scalars['Boolean']['output'];
  enrollmentTermIds: Array<Scalars['String']['output']>;
  gradingPeriodsConnection?: Maybe<GradingPeriodConnection>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  weighted: Scalars['Boolean']['output'];
};


export type GradingPeriodGroupGradingPeriodsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type GradingStandard = Node & {
  __typename?: 'GradingStandard';
  /** legacy canvas id */
  _id?: Maybe<Scalars['ID']['output']>;
  contextCode?: Maybe<Scalars['String']['output']>;
  contextId?: Maybe<Scalars['ID']['output']>;
  contextType?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Array<GradingStandardItem>>;
  id: Scalars['ID']['output'];
  migrationId?: Maybe<Scalars['ID']['output']>;
  rootAccountId?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  usageCount?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
  workflowState?: Maybe<Scalars['String']['output']>;
};

export type GradingStandardItem = {
  __typename?: 'GradingStandardItem';
  baseValue?: Maybe<Scalars['Float']['output']>;
  letterGrade?: Maybe<Scalars['String']['output']>;
};

export enum GradingType {
  GpaScale = 'gpa_scale',
  LetterGrade = 'letter_grade',
  NotGraded = 'not_graded',
  PassFail = 'pass_fail',
  Percent = 'percent',
  Points = 'points'
}

export type Group = AssetString & LegacyIdInterface & Node & Timestamped & {
  __typename?: 'Group';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  activityStream?: Maybe<ActivityStream>;
  assetString?: Maybe<Scalars['String']['output']>;
  canMessage: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  member?: Maybe<GroupMembership>;
  membersConnection?: Maybe<GroupMembershipConnection>;
  membersCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nonCollaborative?: Maybe<Scalars['Boolean']['output']>;
  sisId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type GroupMemberArgs = {
  userId: Scalars['ID']['input'];
};


export type GroupMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for Group. */
export type GroupConnection = {
  __typename?: 'GroupConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GroupEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Group>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type GroupEdge = {
  __typename?: 'GroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Group>;
};

export type GroupMembership = LegacyIdInterface & Timestamped & {
  __typename?: 'GroupMembership';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  state: GroupMembershipState;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

/** The connection type for GroupMembership. */
export type GroupMembershipConnection = {
  __typename?: 'GroupMembershipConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GroupMembershipEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GroupMembership>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type GroupMembershipEdge = {
  __typename?: 'GroupMembershipEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<GroupMembership>;
};

export enum GroupMembershipState {
  Accepted = 'accepted',
  Deleted = 'deleted',
  Invited = 'invited',
  Rejected = 'rejected',
  Requested = 'requested'
}

export type GroupSet = LegacyIdInterface & Node & {
  __typename?: 'GroupSet';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  autoLeader?: Maybe<AutoLeaderPolicy>;
  currentGroup?: Maybe<Group>;
  groups?: Maybe<Array<Group>>;
  groupsConnection?: Maybe<GroupConnection>;
  id: Scalars['ID']['output'];
  /**
   * Sets a cap on the number of members in the group.  Only applies when
   * self-signup is enabled.
   */
  memberLimit?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nonCollaborative?: Maybe<Scalars['Boolean']['output']>;
  selfSignup: SelfSignupPolicy;
  sisId?: Maybe<Scalars['String']['output']>;
};


export type GroupSetGroupsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for GroupSet. */
export type GroupSetConnection = {
  __typename?: 'GroupSetConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GroupSetEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GroupSet>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Type of context for group set */
export enum GroupSetContextType {
  Account = 'account',
  Course = 'course'
}

/** An edge in a connection. */
export type GroupSetEdge = {
  __typename?: 'GroupSetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<GroupSet>;
};

/** Autogenerated input type of HideAssignmentGradesForSections */
export type HideAssignmentGradesForSectionsInput = {
  assignmentId: Scalars['ID']['input'];
  sectionIds: Array<Scalars['ID']['input']>;
};

/** Autogenerated return type of HideAssignmentGradesForSections. */
export type HideAssignmentGradesForSectionsPayload = {
  __typename?: 'HideAssignmentGradesForSectionsPayload';
  assignment?: Maybe<Assignment>;
  errors?: Maybe<Array<ValidationError>>;
  progress?: Maybe<Progress>;
  sections?: Maybe<Array<Section>>;
};

/** Autogenerated input type of HideAssignmentGrades */
export type HideAssignmentGradesInput = {
  assignmentId: Scalars['ID']['input'];
  onlyStudentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  sectionIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  skipStudentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Autogenerated return type of HideAssignmentGrades. */
export type HideAssignmentGradesPayload = {
  __typename?: 'HideAssignmentGradesPayload';
  assignment?: Maybe<Assignment>;
  errors?: Maybe<Array<ValidationError>>;
  progress?: Maybe<Progress>;
  sections?: Maybe<Array<Section>>;
};

/** Autogenerated input type of ImportOutcomes */
export type ImportOutcomesInput = {
  groupId?: InputMaybe<Scalars['ID']['input']>;
  outcomeId?: InputMaybe<Scalars['ID']['input']>;
  sourceContextId?: InputMaybe<Scalars['ID']['input']>;
  sourceContextType?: InputMaybe<Scalars['String']['input']>;
  targetContextId?: InputMaybe<Scalars['ID']['input']>;
  targetContextType?: InputMaybe<Scalars['String']['input']>;
  targetGroupId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated return type of ImportOutcomes. */
export type ImportOutcomesPayload = {
  __typename?: 'ImportOutcomesPayload';
  errors?: Maybe<Array<ValidationError>>;
  progress?: Maybe<Progress>;
};

export type InboxSettings = Timestamped & {
  __typename?: 'InboxSettings';
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  outOfOfficeFirstDate?: Maybe<Scalars['DateTime']['output']>;
  outOfOfficeLastDate?: Maybe<Scalars['DateTime']['output']>;
  outOfOfficeMessage?: Maybe<Scalars['String']['output']>;
  outOfOfficeSubject?: Maybe<Scalars['String']['output']>;
  signature?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  useOutOfOffice: Scalars['Boolean']['output'];
  useSignature: Scalars['Boolean']['output'];
  userId: Scalars['ID']['output'];
};

export type InternalSetting = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'InternalSetting';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  secret: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export enum LatePolicyStatusType {
  Extended = 'extended',
  Late = 'late',
  Missing = 'missing',
  None = 'none'
}

export type LearningOutcome = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'LearningOutcome';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  alignments?: Maybe<Array<OutcomeAlignment>>;
  assessed: Scalars['Boolean']['output'];
  calculationInt?: Maybe<Scalars['Int']['output']>;
  calculationMethod?: Maybe<Scalars['String']['output']>;
  canArchive: Scalars['Boolean']['output'];
  canEdit: Scalars['Boolean']['output'];
  contextId?: Maybe<Scalars['ID']['output']>;
  contextType?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  friendlyDescription?: Maybe<OutcomeFriendlyDescriptionType>;
  id: Scalars['ID']['output'];
  isImported?: Maybe<Scalars['Boolean']['output']>;
  masteryPoints?: Maybe<Scalars['Float']['output']>;
  pointsPossible?: Maybe<Scalars['Float']['output']>;
  ratings?: Maybe<Array<ProficiencyRating>>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorGuid?: Maybe<Scalars['String']['output']>;
};


export type LearningOutcomeAlignmentsArgs = {
  contextId: Scalars['ID']['input'];
  contextType: Scalars['String']['input'];
};


export type LearningOutcomeCanArchiveArgs = {
  contextId: Scalars['ID']['input'];
  contextType: Scalars['String']['input'];
};


export type LearningOutcomeFriendlyDescriptionArgs = {
  contextId: Scalars['ID']['input'];
  contextType: Scalars['String']['input'];
};


export type LearningOutcomeIsImportedArgs = {
  targetContextId: Scalars['ID']['input'];
  targetContextType: Scalars['String']['input'];
};

/** Learning Outcome Group */
export type LearningOutcomeGroup = LegacyIdInterface & Node & {
  __typename?: 'LearningOutcomeGroup';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  canEdit: Scalars['Boolean']['output'];
  childGroups?: Maybe<LearningOutcomeGroupConnection>;
  childGroupsCount: Scalars['Int']['output'];
  contextId?: Maybe<Scalars['ID']['output']>;
  contextType?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  notImportedOutcomesCount?: Maybe<Scalars['Int']['output']>;
  outcomes: ContentTagConnection;
  outcomesCount: Scalars['Int']['output'];
  parentOutcomeGroup?: Maybe<LearningOutcomeGroup>;
  title: Scalars['String']['output'];
  vendorGuid?: Maybe<Scalars['String']['output']>;
};


/** Learning Outcome Group */
export type LearningOutcomeGroupChildGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Learning Outcome Group */
export type LearningOutcomeGroupNotImportedOutcomesCountArgs = {
  targetGroupId?: InputMaybe<Scalars['ID']['input']>;
};


/** Learning Outcome Group */
export type LearningOutcomeGroupOutcomesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


/** Learning Outcome Group */
export type LearningOutcomeGroupOutcomesCountArgs = {
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for LearningOutcomeGroup. */
export type LearningOutcomeGroupConnection = {
  __typename?: 'LearningOutcomeGroupConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LearningOutcomeGroupEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<LearningOutcomeGroup>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LearningOutcomeGroupEdge = {
  __typename?: 'LearningOutcomeGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<LearningOutcomeGroup>;
};

export type LegacyIdInterface = {
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
};

export type LockInfo = {
  __typename?: 'LockInfo';
  canView?: Maybe<Scalars['Boolean']['output']>;
  isLocked: Scalars['Boolean']['output'];
  lockAt?: Maybe<Scalars['DateTime']['output']>;
  lockedObject?: Maybe<Lockable>;
  module?: Maybe<Module>;
  unlockAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Types that can be locked */
export type Lockable = Assignment | Discussion | Module | Page | Quiz;

export type LtiAsset = LegacyIdInterface & {
  __typename?: 'LtiAsset';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  attachmentId?: Maybe<Scalars['ID']['output']>;
};

export type LtiAssetProcessor = LegacyIdInterface & {
  __typename?: 'LtiAssetProcessor';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  externalTool?: Maybe<ExternalTool>;
  iconOrToolIconUrl?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** The connection type for LtiAssetProcessor. */
export type LtiAssetProcessorConnection = {
  __typename?: 'LtiAssetProcessorConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LtiAssetProcessorEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<LtiAssetProcessor>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LtiAssetProcessorEdge = {
  __typename?: 'LtiAssetProcessorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<LtiAssetProcessor>;
};

export type LtiAssetReport = LegacyIdInterface & {
  __typename?: 'LtiAssetReport';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  asset?: Maybe<LtiAsset>;
  comment?: Maybe<Scalars['String']['output']>;
  errorCode?: Maybe<Scalars['String']['output']>;
  indicationAlt?: Maybe<Scalars['String']['output']>;
  indicationColor?: Maybe<Scalars['String']['output']>;
  launchUrlPath?: Maybe<Scalars['String']['output']>;
  priority: Scalars['Int']['output'];
  processingProgress: Scalars['String']['output'];
  processorId: Scalars['ID']['output'];
  reportType: Scalars['String']['output'];
  resubmitAvailable: Scalars['Boolean']['output'];
  result?: Maybe<Scalars['String']['output']>;
  resultTruncated?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** The connection type for LtiAssetReport. */
export type LtiAssetReportConnection = {
  __typename?: 'LtiAssetReportConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LtiAssetReportEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<LtiAssetReport>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LtiAssetReportEdge = {
  __typename?: 'LtiAssetReportEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<LtiAssetReport>;
};

/** Autogenerated input type of MarkSubmissionCommentsRead */
export type MarkSubmissionCommentsReadInput = {
  submissionCommentIds: Array<Scalars['ID']['input']>;
  submissionId: Scalars['ID']['input'];
};

/** Autogenerated return type of MarkSubmissionCommentsRead. */
export type MarkSubmissionCommentsReadPayload = {
  __typename?: 'MarkSubmissionCommentsReadPayload';
  errors?: Maybe<Array<ValidationError>>;
  submissionComments?: Maybe<Array<SubmissionComment>>;
};

export type MediaObject = Node & {
  __typename?: 'MediaObject';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  canAddCaptions?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  mediaDownloadUrl?: Maybe<Scalars['String']['output']>;
  mediaSources?: Maybe<Array<MediaSource>>;
  mediaTracks?: Maybe<Array<MediaTrack>>;
  mediaType?: Maybe<MediaType>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MediaSource = {
  __typename?: 'MediaSource';
  bitrate?: Maybe<Scalars['String']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  fileExt?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  isOriginal?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};

export type MediaTrack = LegacyIdInterface & {
  __typename?: 'MediaTrack';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  mediaObject?: Maybe<MediaObject>;
  webvttContent?: Maybe<Scalars['String']['output']>;
};

export enum MediaType {
  Audio = 'audio',
  Video = 'video'
}

export type MessagePermissions = {
  __typename?: 'MessagePermissions';
  sendMessages: Scalars['Boolean']['output'];
  sendMessagesAll: Scalars['Boolean']['output'];
};

export type MessageableContext = Node & {
  __typename?: 'MessageableContext';
  avatarUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  itemCount?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<MessagePermissions>;
  userCount?: Maybe<Scalars['Int']['output']>;
};

/** The connection type for MessageableContext. */
export type MessageableContextConnection = {
  __typename?: 'MessageableContextConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MessageableContextEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<MessageableContext>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MessageableContextEdge = {
  __typename?: 'MessageableContextEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<MessageableContext>;
};

export type MessageableUser = Node & {
  __typename?: 'MessageableUser';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  commonCoursesConnection?: Maybe<EnrollmentConnection>;
  commonGroupsConnection?: Maybe<GroupConnection>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  observerEnrollmentsConnection?: Maybe<EnrollmentConnection>;
  pronouns?: Maybe<Scalars['String']['output']>;
  shortName: Scalars['String']['output'];
};


export type MessageableUserCommonCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MessageableUserCommonGroupsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MessageableUserObserverEnrollmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  contextCode: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for MessageableUser. */
export type MessageableUserConnection = {
  __typename?: 'MessageableUserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MessageableUserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<MessageableUser>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MessageableUserEdge = {
  __typename?: 'MessageableUserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<MessageableUser>;
};

/** Settings for Moderated Grading on an Assignment */
export type ModeratedGrading = {
  __typename?: 'ModeratedGrading';
  /** Boolean indicating if the assignment is moderated. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The user of the grader responsible for choosing final grades for this assignment. */
  finalGrader?: Maybe<User>;
  /** Boolean indicating if provisional graders' comments are visible to other provisional graders. */
  graderCommentsVisibleToGraders?: Maybe<Scalars['Boolean']['output']>;
  /** The maximum number of provisional graders who may issue grades for this assignment. */
  graderCount?: Maybe<Scalars['Int']['output']>;
  /** Boolean indicating if provisional graders' identities are hidden from other provisional graders. */
  graderNamesVisibleToFinalGrader?: Maybe<Scalars['Boolean']['output']>;
  /** Boolean indicating if provisional grader identities are visible to the final grader. */
  gradersAnonymousToGraders?: Maybe<Scalars['Boolean']['output']>;
};

export type Module = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'Module';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  completionRequirements?: Maybe<Array<ModuleCompletionRequirement>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  estimatedDuration?: Maybe<Scalars['ISO8601Duration']['output']>;
  hasActiveOverrides: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  moduleItems?: Maybe<Array<ModuleItem>>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  prerequisites?: Maybe<Array<ModulePrerequisite>>;
  /** The current user's progression through the module */
  progression?: Maybe<ModuleProgression>;
  published?: Maybe<Scalars['Boolean']['output']>;
  requireSequentialProgress?: Maybe<Scalars['Boolean']['output']>;
  requirementCount?: Maybe<Scalars['Int']['output']>;
  submissionStatistics?: Maybe<ModuleStatistics>;
  unlockAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ModuleCompletionRequirement = {
  __typename?: 'ModuleCompletionRequirement';
  id: Scalars['ID']['output'];
  minPercentage?: Maybe<Scalars['Float']['output']>;
  minScore?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

/** The connection type for Module. */
export type ModuleConnection = {
  __typename?: 'ModuleConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ModuleEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Module>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ModuleEdge = {
  __typename?: 'ModuleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Module>;
};

export type ModuleExternalTool = LegacyIdInterface & ModuleItemInterface & Timestamped & {
  __typename?: 'ModuleExternalTool';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  canDuplicate?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the module item can be unpublished */
  canUnpublish?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  graded?: Maybe<Scalars['Boolean']['output']>;
  isLockedByMasterCourse: Scalars['Boolean']['output'];
  modules?: Maybe<Array<Module>>;
  pointsPossible?: Maybe<Scalars['Float']['output']>;
  /** Whether the module item is published */
  published?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ModuleItem = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'ModuleItem';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  content?: Maybe<ModuleItemInterface>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  estimatedDuration?: Maybe<Scalars['ISO8601Duration']['output']>;
  id: Scalars['ID']['output'];
  indent?: Maybe<Scalars['Int']['output']>;
  module?: Maybe<Module>;
  next?: Maybe<ModuleItem>;
  /** Items are ordered based on distance to the current item, starting with the next item directly following it. */
  nextItemsConnection?: Maybe<ModuleItemConnection>;
  position?: Maybe<Scalars['Int']['output']>;
  previous?: Maybe<ModuleItem>;
  /** Items are ordered based on distance to the current item, starting with the previous item directly preceding it. */
  previousItemsConnection?: Maybe<ModuleItemConnection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
};


export type ModuleItemNextItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ModuleItemPreviousItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for ModuleItem. */
export type ModuleItemConnection = {
  __typename?: 'ModuleItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ModuleItemEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ModuleItem>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ModuleItemEdge = {
  __typename?: 'ModuleItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ModuleItem>;
};

/** An item that can be in context modules */
export type ModuleItemInterface = {
  canDuplicate?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the module item can be unpublished */
  canUnpublish?: Maybe<Scalars['Boolean']['output']>;
  graded?: Maybe<Scalars['Boolean']['output']>;
  isLockedByMasterCourse: Scalars['Boolean']['output'];
  modules?: Maybe<Array<Module>>;
  pointsPossible?: Maybe<Scalars['Float']['output']>;
  /** Whether the module item is published */
  published?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ModulePrerequisite = {
  __typename?: 'ModulePrerequisite';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type ModuleProgression = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'ModuleProgression';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  collapsed?: Maybe<Scalars['Boolean']['output']>;
  completed: Scalars['Boolean']['output'];
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  contextModule?: Maybe<Module>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  current?: Maybe<Scalars['Boolean']['output']>;
  currentPosition?: Maybe<Scalars['Int']['output']>;
  evaluatedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** Items are ordered by position */
  incompleteItemsConnection: ModuleItemConnection;
  incompleteRequirements?: Maybe<Array<Requirement>>;
  locked: Scalars['Boolean']['output'];
  module: Module;
  requirementsMet?: Maybe<Array<Requirement>>;
  started: Scalars['Boolean']['output'];
  unlocked: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  workflowState: Scalars['String']['output'];
};


export type ModuleProgressionIncompleteItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for ModuleProgression. */
export type ModuleProgressionConnection = {
  __typename?: 'ModuleProgressionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ModuleProgressionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ModuleProgression>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ModuleProgressionEdge = {
  __typename?: 'ModuleProgressionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ModuleProgression>;
};

export type ModuleStatistics = {
  __typename?: 'ModuleStatistics';
  latestDueAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  missingAssignmentCount: Scalars['Int']['output'];
};

/** Autogenerated input type of MoveOutcomeLinks */
export type MoveOutcomeLinksInput = {
  /** The id of the destination group */
  groupId: Scalars['ID']['input'];
  /** A list of ContentTags that will be moved */
  outcomeLinkIds: Array<Scalars['ID']['input']>;
};

/** Autogenerated return type of MoveOutcomeLinks. */
export type MoveOutcomeLinksPayload = {
  __typename?: 'MoveOutcomeLinksPayload';
  errors?: Maybe<Array<ValidationError>>;
  /** List of Outcome Links that were sucessfully moved to the group */
  movedOutcomeLinks: Array<ContentTag>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addConversationMessage?: Maybe<AddConversationMessagePayload>;
  autoGradeSubmission?: Maybe<AutoGradeSubmissionPayload>;
  createAccountDomainLookup?: Maybe<CreateAccountDomainLookupPayload>;
  createAssignment?: Maybe<CreateAssignmentPayload>;
  createCommentBankItem?: Maybe<CreateCommentBankItemPayload>;
  createConversation?: Maybe<CreateConversationPayload>;
  createDiscussionEntry?: Maybe<CreateDiscussionEntryPayload>;
  createDiscussionEntryDraft?: Maybe<CreateDiscussionEntryDraftPayload>;
  createDiscussionTopic?: Maybe<CreateDiscussionTopicPayload>;
  createGroupInSet?: Maybe<CreateGroupInSetPayload>;
  createGroupSet?: Maybe<CreateGroupSetPayload>;
  createInternalSetting?: Maybe<CreateInternalSettingPayload>;
  createLearningOutcome?: Maybe<CreateLearningOutcomePayload>;
  createLearningOutcomeGroup?: Maybe<CreateLearningOutcomeGroupPayload>;
  createModule?: Maybe<CreateModulePayload>;
  createOutcomeCalculationMethod?: Maybe<CreateOutcomeCalculationMethodPayload>;
  createOutcomeProficiency?: Maybe<CreateOutcomeProficiencyPayload>;
  /** IN ACTIVE DEVELOPMENT, USE AT YOUR OWN RISK: Submit homework on an assignment. */
  createSubmission?: Maybe<CreateSubmissionPayload>;
  createSubmissionComment?: Maybe<CreateSubmissionCommentPayload>;
  createSubmissionDraft?: Maybe<CreateSubmissionDraftPayload>;
  createUserInboxLabel?: Maybe<CreateUserInboxLabelPayload>;
  deleteAccountDomainLookup?: Maybe<DeleteAccountDomainLookupPayload>;
  deleteCommentBankItem?: Maybe<DeleteCommentBankItemPayload>;
  deleteConversationMessages?: Maybe<DeleteConversationMessagesPayload>;
  deleteConversations?: Maybe<DeleteConversationsPayload>;
  deleteCustomGradeStatus?: Maybe<DeleteCustomGradeStatusPayload>;
  deleteDiscussionEntry?: Maybe<DeleteDiscussionEntryPayload>;
  deleteDiscussionTopic?: Maybe<DeleteDiscussionTopicPayload>;
  deleteInternalSetting?: Maybe<DeleteInternalSettingPayload>;
  deleteOutcomeCalculationMethod?: Maybe<DeleteOutcomeCalculationMethodPayload>;
  deleteOutcomeLinks?: Maybe<DeleteOutcomeLinksPayload>;
  deleteOutcomeProficiency?: Maybe<DeleteOutcomeProficiencyPayload>;
  deleteSubmissionComment?: Maybe<DeleteSubmissionCommentPayload>;
  deleteSubmissionDraft?: Maybe<DeleteSubmissionDraftPayload>;
  deleteUserInboxLabel?: Maybe<DeleteUserInboxLabelPayload>;
  hideAssignmentGrades?: Maybe<HideAssignmentGradesPayload>;
  hideAssignmentGradesForSections?: Maybe<HideAssignmentGradesForSectionsPayload>;
  importOutcomes?: Maybe<ImportOutcomesPayload>;
  markSubmissionCommentsRead?: Maybe<MarkSubmissionCommentsReadPayload>;
  moveOutcomeLinks?: Maybe<MoveOutcomeLinksPayload>;
  postAssignmentGrades?: Maybe<PostAssignmentGradesPayload>;
  postAssignmentGradesForSections?: Maybe<PostAssignmentGradesForSectionsPayload>;
  postDraftSubmissionComment?: Maybe<PostDraftSubmissionCommentPayload>;
  saveRubricAssessment?: Maybe<SaveRubricAssessmentPayload>;
  /** Sets the post policy for the assignment. */
  setAssignmentPostPolicy?: Maybe<SetAssignmentPostPolicyPayload>;
  /**
   * Sets the post policy for the course, with an option to override and delete
   * existing assignment post policies.
   */
  setCoursePostPolicy?: Maybe<SetCoursePostPolicyPayload>;
  setFriendlyDescription?: Maybe<SetFriendlyDescriptionPayload>;
  setModuleItemCompletion?: Maybe<SetModuleItemCompletionPayload>;
  /**
   * Sets the overridden final score for the associated enrollment, optionally limited to a specific
   * grading period. This will supersede the computed final score/grade if present.
   */
  setOverrideScore?: Maybe<SetOverrideScorePayload>;
  setOverrideStatus?: Maybe<SetOverrideStatusPayload>;
  setRubricSelfAssessment?: Maybe<SetRubricSelfAssessmentPayload>;
  subscribeToDiscussionTopic?: Maybe<SubscribeToDiscussionTopicPayload>;
  updateAccountDomainLookup?: Maybe<UpdateAccountDomainLookupPayload>;
  updateAssignment?: Maybe<UpdateAssignmentPayload>;
  updateCommentBankItem?: Maybe<UpdateCommentBankItemPayload>;
  updateConversationParticipants?: Maybe<UpdateConversationParticipantsPayload>;
  updateDiscussionEntriesReadState?: Maybe<UpdateDiscussionEntriesReadStatePayload>;
  updateDiscussionEntry?: Maybe<UpdateDiscussionEntryPayload>;
  updateDiscussionEntryParticipant?: Maybe<UpdateDiscussionEntryParticipantPayload>;
  updateDiscussionExpanded?: Maybe<UpdateDiscussionExpandedPayload>;
  updateDiscussionReadState?: Maybe<UpdateDiscussionReadStatePayload>;
  updateDiscussionSortOrder?: Maybe<UpdateDiscussionSortOrderPayload>;
  updateDiscussionThreadReadState?: Maybe<UpdateDiscussionThreadReadStatePayload>;
  updateDiscussionTopic?: Maybe<UpdateDiscussionTopicPayload>;
  updateDiscussionTopicParticipant?: Maybe<UpdateDiscussionTopicParticipantPayload>;
  updateGradebookGroupFilter?: Maybe<UpdateGradebookGroupFilterPayload>;
  updateInternalSetting?: Maybe<UpdateInternalSettingPayload>;
  updateLearningOutcome?: Maybe<UpdateLearningOutcomePayload>;
  updateLearningOutcomeGroup?: Maybe<UpdateLearningOutcomeGroupPayload>;
  updateMyInboxSettings?: Maybe<UpdateMyInboxSettingsPayload>;
  updateNotificationPreferences?: Maybe<UpdateNotificationPreferencesPayload>;
  updateOutcomeCalculationMethod?: Maybe<UpdateOutcomeCalculationMethodPayload>;
  updateOutcomeProficiency?: Maybe<UpdateOutcomeProficiencyPayload>;
  updateRubricArchivedState?: Maybe<UpdateRubricArchivedStatePayload>;
  updateRubricAssessmentReadState?: Maybe<UpdateRubricAssessmentReadStatePayload>;
  updateSpeedGraderSettings?: Maybe<UpdateSpeedGraderSettingsPayload>;
  updateSplitScreenViewDeeplyNestedAlert?: Maybe<UpdateSplitScreenViewDeeplyNestedAlertPayload>;
  updateSubmissionGrade?: Maybe<UpdateSubmissionsGradePayload>;
  updateSubmissionGradeStatus?: Maybe<UpdateSubmissionsGradeStatusPayload>;
  updateSubmissionSticker?: Maybe<UpdateSubmissionStickerPayload>;
  updateSubmissionStudentEnteredScore?: Maybe<UpdateSubmissionStudentEnteredScorePayload>;
  updateSubmissionsReadState?: Maybe<UpdateSubmissionsReadStatePayload>;
  updateUserDiscussionsSplitscreenView?: Maybe<UpdateUserDiscussionsSplitscreenViewPayload>;
  upsertCustomGradeStatus?: Maybe<UpsertCustomGradeStatusPayload>;
  upsertStandardGradeStatus?: Maybe<UpsertStandardGradeStatusPayload>;
};


export type MutationAddConversationMessageArgs = {
  input: AddConversationMessageInput;
};


export type MutationAutoGradeSubmissionArgs = {
  input: AutoGradeSubmissionInput;
};


export type MutationCreateAccountDomainLookupArgs = {
  input: CreateAccountDomainLookupInput;
};


export type MutationCreateAssignmentArgs = {
  input: CreateAssignmentInput;
};


export type MutationCreateCommentBankItemArgs = {
  input: CreateCommentBankItemInput;
};


export type MutationCreateConversationArgs = {
  input: CreateConversationInput;
};


export type MutationCreateDiscussionEntryArgs = {
  input: CreateDiscussionEntryInput;
};


export type MutationCreateDiscussionEntryDraftArgs = {
  input: CreateDiscussionEntryDraftInput;
};


export type MutationCreateDiscussionTopicArgs = {
  input: CreateDiscussionTopicInput;
};


export type MutationCreateGroupInSetArgs = {
  input: CreateGroupInSetInput;
};


export type MutationCreateGroupSetArgs = {
  input: CreateGroupSetInput;
};


export type MutationCreateInternalSettingArgs = {
  input: CreateInternalSettingInput;
};


export type MutationCreateLearningOutcomeArgs = {
  input: CreateLearningOutcomeInput;
};


export type MutationCreateLearningOutcomeGroupArgs = {
  input: CreateLearningOutcomeGroupInput;
};


export type MutationCreateModuleArgs = {
  input: CreateModuleInput;
};


export type MutationCreateOutcomeCalculationMethodArgs = {
  input: CreateOutcomeCalculationMethodInput;
};


export type MutationCreateOutcomeProficiencyArgs = {
  input: CreateOutcomeProficiencyInput;
};


export type MutationCreateSubmissionArgs = {
  input: CreateSubmissionInput;
};


export type MutationCreateSubmissionCommentArgs = {
  input: CreateSubmissionCommentInput;
};


export type MutationCreateSubmissionDraftArgs = {
  input: CreateSubmissionDraftInput;
};


export type MutationCreateUserInboxLabelArgs = {
  input: CreateUserInboxLabelInput;
};


export type MutationDeleteAccountDomainLookupArgs = {
  input: DeleteAccountDomainLookupInput;
};


export type MutationDeleteCommentBankItemArgs = {
  input: DeleteCommentBankItemInput;
};


export type MutationDeleteConversationMessagesArgs = {
  input: DeleteConversationMessagesInput;
};


export type MutationDeleteConversationsArgs = {
  input: DeleteConversationsInput;
};


export type MutationDeleteCustomGradeStatusArgs = {
  input: DeleteCustomGradeStatusInput;
};


export type MutationDeleteDiscussionEntryArgs = {
  input: DeleteDiscussionEntryInput;
};


export type MutationDeleteDiscussionTopicArgs = {
  input: DeleteDiscussionTopicInput;
};


export type MutationDeleteInternalSettingArgs = {
  input: DeleteInternalSettingInput;
};


export type MutationDeleteOutcomeCalculationMethodArgs = {
  input: DeleteOutcomeCalculationMethodInput;
};


export type MutationDeleteOutcomeLinksArgs = {
  input: DeleteOutcomeLinksInput;
};


export type MutationDeleteOutcomeProficiencyArgs = {
  input: DeleteOutcomeProficiencyInput;
};


export type MutationDeleteSubmissionCommentArgs = {
  input: DeleteSubmissionCommentInput;
};


export type MutationDeleteSubmissionDraftArgs = {
  input: DeleteSubmissionDraftInput;
};


export type MutationDeleteUserInboxLabelArgs = {
  input: DeleteUserInboxLabelInput;
};


export type MutationHideAssignmentGradesArgs = {
  input: HideAssignmentGradesInput;
};


export type MutationHideAssignmentGradesForSectionsArgs = {
  input: HideAssignmentGradesForSectionsInput;
};


export type MutationImportOutcomesArgs = {
  input: ImportOutcomesInput;
};


export type MutationMarkSubmissionCommentsReadArgs = {
  input: MarkSubmissionCommentsReadInput;
};


export type MutationMoveOutcomeLinksArgs = {
  input: MoveOutcomeLinksInput;
};


export type MutationPostAssignmentGradesArgs = {
  input: PostAssignmentGradesInput;
};


export type MutationPostAssignmentGradesForSectionsArgs = {
  input: PostAssignmentGradesForSectionsInput;
};


export type MutationPostDraftSubmissionCommentArgs = {
  input: PostDraftSubmissionCommentInput;
};


export type MutationSaveRubricAssessmentArgs = {
  input: SaveRubricAssessmentInput;
};


export type MutationSetAssignmentPostPolicyArgs = {
  input: SetAssignmentPostPolicyInput;
};


export type MutationSetCoursePostPolicyArgs = {
  input: SetCoursePostPolicyInput;
};


export type MutationSetFriendlyDescriptionArgs = {
  input: SetFriendlyDescriptionInput;
};


export type MutationSetModuleItemCompletionArgs = {
  input: SetModuleItemCompletionInput;
};


export type MutationSetOverrideScoreArgs = {
  input: SetOverrideScoreInput;
};


export type MutationSetOverrideStatusArgs = {
  input: SetOverrideStatusInput;
};


export type MutationSetRubricSelfAssessmentArgs = {
  input: SetRubricSelfAssessmentInput;
};


export type MutationSubscribeToDiscussionTopicArgs = {
  input: SubscribeToDiscussionTopicInput;
};


export type MutationUpdateAccountDomainLookupArgs = {
  input: UpdateAccountDomainLookupInput;
};


export type MutationUpdateAssignmentArgs = {
  input: UpdateAssignmentInput;
};


export type MutationUpdateCommentBankItemArgs = {
  input: UpdateCommentBankItemInput;
};


export type MutationUpdateConversationParticipantsArgs = {
  input: UpdateConversationParticipantsInput;
};


export type MutationUpdateDiscussionEntriesReadStateArgs = {
  input: UpdateDiscussionEntriesReadStateInput;
};


export type MutationUpdateDiscussionEntryArgs = {
  input: UpdateDiscussionEntryInput;
};


export type MutationUpdateDiscussionEntryParticipantArgs = {
  input: UpdateDiscussionEntryParticipantInput;
};


export type MutationUpdateDiscussionExpandedArgs = {
  input: UpdateDiscussionExpandedInput;
};


export type MutationUpdateDiscussionReadStateArgs = {
  input: UpdateDiscussionReadStateInput;
};


export type MutationUpdateDiscussionSortOrderArgs = {
  input: UpdateDiscussionSortOrderInput;
};


export type MutationUpdateDiscussionThreadReadStateArgs = {
  input: UpdateDiscussionThreadReadStateInput;
};


export type MutationUpdateDiscussionTopicArgs = {
  input: UpdateDiscussionTopicInput;
};


export type MutationUpdateDiscussionTopicParticipantArgs = {
  input: UpdateDiscussionTopicParticipantInput;
};


export type MutationUpdateGradebookGroupFilterArgs = {
  input: UpdateGradebookGroupFilterInput;
};


export type MutationUpdateInternalSettingArgs = {
  input: UpdateInternalSettingInput;
};


export type MutationUpdateLearningOutcomeArgs = {
  input: UpdateLearningOutcomeInput;
};


export type MutationUpdateLearningOutcomeGroupArgs = {
  input: UpdateLearningOutcomeGroupInput;
};


export type MutationUpdateMyInboxSettingsArgs = {
  input: UpdateMyInboxSettingsInput;
};


export type MutationUpdateNotificationPreferencesArgs = {
  input: UpdateNotificationPreferencesInput;
};


export type MutationUpdateOutcomeCalculationMethodArgs = {
  input: UpdateOutcomeCalculationMethodInput;
};


export type MutationUpdateOutcomeProficiencyArgs = {
  input: UpdateOutcomeProficiencyInput;
};


export type MutationUpdateRubricArchivedStateArgs = {
  input: UpdateRubricArchivedStateInput;
};


export type MutationUpdateRubricAssessmentReadStateArgs = {
  input: UpdateRubricAssessmentReadStateInput;
};


export type MutationUpdateSpeedGraderSettingsArgs = {
  input: UpdateSpeedGraderSettingsInput;
};


export type MutationUpdateSplitScreenViewDeeplyNestedAlertArgs = {
  input: UpdateSplitScreenViewDeeplyNestedAlertInput;
};


export type MutationUpdateSubmissionGradeArgs = {
  input: UpdateSubmissionsGradeInput;
};


export type MutationUpdateSubmissionGradeStatusArgs = {
  input: UpdateSubmissionsGradeStatusInput;
};


export type MutationUpdateSubmissionStickerArgs = {
  input: UpdateSubmissionStickerInput;
};


export type MutationUpdateSubmissionStudentEnteredScoreArgs = {
  input: UpdateSubmissionStudentEnteredScoreInput;
};


export type MutationUpdateSubmissionsReadStateArgs = {
  input: UpdateSubmissionsReadStateInput;
};


export type MutationUpdateUserDiscussionsSplitscreenViewArgs = {
  input: UpdateUserDiscussionsSplitscreenViewInput;
};


export type MutationUpsertCustomGradeStatusArgs = {
  input: UpsertCustomGradeStatusInput;
};


export type MutationUpsertStandardGradeStatusArgs = {
  input: UpsertStandardGradeStatusInput;
};

export type MutationLog = {
  __typename?: 'MutationLog';
  assetString: Scalars['ID']['output'];
  mutationId: Scalars['ID']['output'];
  mutationName: Scalars['String']['output'];
  params?: Maybe<Scalars['JSON']['output']>;
  /**
   * If the mutation was performed by a user masquerading as another user,
   * this field returns the "real" (logged-in) user.
   */
  realUser?: Maybe<User>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

/** The connection type for MutationLog. */
export type MutationLogConnection = {
  __typename?: 'MutationLogConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MutationLogEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<MutationLog>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MutationLogEdge = {
  __typename?: 'MutationLogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<MutationLog>;
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID']['output'];
};

export enum NodeType {
  Account = 'Account',
  Assignment = 'Assignment',
  AssignmentGroup = 'AssignmentGroup',
  Conversation = 'Conversation',
  Course = 'Course',
  Discussion = 'Discussion',
  DiscussionEntry = 'DiscussionEntry',
  Enrollment = 'Enrollment',
  File = 'File',
  Folder = 'Folder',
  GradingPeriod = 'GradingPeriod',
  GradingPeriodGroup = 'GradingPeriodGroup',
  Group = 'Group',
  GroupSet = 'GroupSet',
  InternalSetting = 'InternalSetting',
  LearningOutcomeGroup = 'LearningOutcomeGroup',
  MediaObject = 'MediaObject',
  Module = 'Module',
  ModuleItem = 'ModuleItem',
  ModuleProgression = 'ModuleProgression',
  OutcomeCalculationMethod = 'OutcomeCalculationMethod',
  OutcomeProficiency = 'OutcomeProficiency',
  Page = 'Page',
  PostPolicy = 'PostPolicy',
  Progress = 'Progress',
  Rubric = 'Rubric',
  Section = 'Section',
  Submission = 'Submission',
  Term = 'Term',
  UsageRights = 'UsageRights',
  User = 'User'
}

/** A descriptive tag that doesn't link the assignment to a set */
export type Noop = {
  __typename?: 'Noop';
  _id: Scalars['ID']['output'];
};

export type Notification = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'Notification';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  category: Scalars['String']['output'];
  categoryDescription: Scalars['String']['output'];
  categoryDisplayName: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflowState?: Maybe<Scalars['String']['output']>;
};

/** The categories that a notification can belong to */
export enum NotificationCategoryType {
  AccountNotification = 'Account_Notification',
  AddedToConversation = 'Added_To_Conversation',
  AllSubmissions = 'All_Submissions',
  Announcement = 'Announcement',
  AnnouncementCreatedByYou = 'Announcement_Created_By_You',
  AppointmentAvailability = 'Appointment_Availability',
  AppointmentCancelations = 'Appointment_Cancelations',
  AppointmentSignups = 'Appointment_Signups',
  Blueprint = 'Blueprint',
  Calendar = 'Calendar',
  ContentLinkError = 'Content_Link_Error',
  ConversationCreated = 'Conversation_Created',
  ConversationMessage = 'Conversation_Message',
  CourseContent = 'Course_Content',
  Discussion = 'Discussion',
  DiscussionEntry = 'DiscussionEntry',
  DiscussionMention = 'DiscussionMention',
  DueDate = 'Due_Date',
  Files = 'Files',
  Grading = 'Grading',
  GradingPolicies = 'Grading_Policies',
  Invitation = 'Invitation',
  LateGrading = 'Late_Grading',
  MembershipUpdate = 'Membership_Update',
  Other = 'Other',
  RecordingReady = 'Recording_Ready',
  ReportedReply = 'ReportedReply',
  StudentAppointmentSignups = 'Student_Appointment_Signups',
  SubmissionComment = 'Submission_Comment'
}

/** Frequency that notifications can be delivered on */
export enum NotificationFrequencyType {
  Daily = 'daily',
  Immediately = 'immediately',
  Never = 'never',
  Weekly = 'weekly'
}

export type NotificationPolicy = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'NotificationPolicy';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  communicationChannelId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  frequency?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  notification?: Maybe<Notification>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NotificationPreferences = {
  __typename?: 'NotificationPreferences';
  channels?: Maybe<Array<CommunicationChannel>>;
  readPrivacyNoticeDate?: Maybe<Scalars['String']['output']>;
  sendObservedNamesInNotifications?: Maybe<Scalars['Boolean']['output']>;
  sendScoresInEmails?: Maybe<Scalars['Boolean']['output']>;
};


export type NotificationPreferencesChannelsArgs = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
};


export type NotificationPreferencesSendScoresInEmailsArgs = {
  courseId?: InputMaybe<Scalars['ID']['input']>;
};

/** Context types that can be associated with notification preferences */
export enum NotificationPreferencesContextType {
  Account = 'Account',
  Course = 'Course'
}

/** Types that can be submitted online */
export enum OnlineSubmissionType {
  BasicLtiLaunch = 'basic_lti_launch',
  MediaRecording = 'media_recording',
  OnlineTextEntry = 'online_text_entry',
  OnlineUpload = 'online_upload',
  OnlineUrl = 'online_url',
  StudentAnnotation = 'student_annotation'
}

export enum OrderDirection {
  Ascending = 'ascending',
  Descending = 'descending'
}

export type OutcomeAlignment = Timestamped & {
  __typename?: 'OutcomeAlignment';
  _id: Scalars['ID']['output'];
  alignmentsCount: Scalars['Int']['output'];
  assignmentContentType?: Maybe<Scalars['String']['output']>;
  assignmentWorkflowState?: Maybe<Scalars['String']['output']>;
  contentId: Scalars['ID']['output'];
  contentType: Scalars['String']['output'];
  contextId: Scalars['ID']['output'];
  contextType: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  learningOutcomeId: Scalars['ID']['output'];
  moduleId?: Maybe<Scalars['String']['output']>;
  moduleName?: Maybe<Scalars['String']['output']>;
  moduleUrl?: Maybe<Scalars['String']['output']>;
  moduleWorkflowState?: Maybe<Scalars['String']['output']>;
  quizItems?: Maybe<Array<QuizItem>>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

/** Customized calculation method */
export type OutcomeCalculationMethod = LegacyIdInterface & Node & {
  __typename?: 'OutcomeCalculationMethod';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  calculationInt?: Maybe<Scalars['Int']['output']>;
  calculationMethod: Scalars['String']['output'];
  contextId: Scalars['ID']['output'];
  contextType: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  locked: Scalars['Boolean']['output'];
};

export type OutcomeFriendlyDescriptionType = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'OutcomeFriendlyDescriptionType';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  contextId: Scalars['ID']['output'];
  contextType: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  learningOutcomeId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflowState: Scalars['String']['output'];
};

/** Customized proficiency ratings */
export type OutcomeProficiency = LegacyIdInterface & Node & {
  __typename?: 'OutcomeProficiency';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  contextId: Scalars['ID']['output'];
  contextType: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  locked: Scalars['Boolean']['output'];
  masteryPoints: Scalars['Float']['output'];
  proficiencyRatingsConnection?: Maybe<ProficiencyRatingConnection>;
};


/** Customized proficiency ratings */
export type OutcomeProficiencyProficiencyRatingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type OutcomeProficiencyRatingCreate = {
  color: Scalars['String']['input'];
  description: Scalars['String']['input'];
  mastery: Scalars['Boolean']['input'];
  points: Scalars['Float']['input'];
};

export type Page = LegacyIdInterface & ModuleItemInterface & Node & Timestamped & {
  __typename?: 'Page';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  canDuplicate?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the module item can be unpublished */
  canUnpublish?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  graded?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isLockedByMasterCourse: Scalars['Boolean']['output'];
  modules?: Maybe<Array<Module>>;
  pointsPossible?: Maybe<Scalars['Float']['output']>;
  /** Whether the module item is published */
  published?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** The connection type for Page. */
export type PageConnection = {
  __typename?: 'PageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PageEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Page>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Page>;
};

export type PageFilter = {
  /** only return pages whose title matches this search term */
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  /**
   * only return pages for the given user. Defaults to
   * the current user.
   */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageViewAnalysis = {
  __typename?: 'PageViewAnalysis';
  /** This number (0-3) is intended to give an idea of how the student is doing relative to others in the course */
  level?: Maybe<Scalars['Int']['output']>;
  /** The maximum number of views/participations in this course */
  max?: Maybe<Scalars['Int']['output']>;
  /** The number of views/participations this student has */
  total?: Maybe<Scalars['Int']['output']>;
};

export type PagesConnectionInterface = {
  /** returns a list of wiki pages. */
  pagesConnection?: Maybe<PageConnection>;
};


export type PagesConnectionInterfacePagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Settings for Peer Reviews on an Assignment */
export type PeerReviews = {
  __typename?: 'PeerReviews';
  /** Boolean representing whether or not peer reviews are anonymous */
  anonymousReviews?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Boolean indicating peer reviews are assigned automatically. If false, the
   * teacher is expected to manually assign peer reviews.
   */
  automaticReviews?: Maybe<Scalars['Boolean']['output']>;
  /** Integer representing the amount of reviews each user is assigned. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Date and Time representing when the peer reviews are due */
  dueAt?: Maybe<Scalars['DateTime']['output']>;
  /** Boolean indicating if peer reviews are required for this assignment */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Boolean representing whether or not members from within the same group on a
   * group assignment can be assigned to peer review their own group's work
   */
  intraReviews?: Maybe<Scalars['Boolean']['output']>;
};

/** Autogenerated input type of PostAssignmentGradesForSections */
export type PostAssignmentGradesForSectionsInput = {
  assignmentId: Scalars['ID']['input'];
  gradedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  sectionIds: Array<Scalars['ID']['input']>;
};

/** Autogenerated return type of PostAssignmentGradesForSections. */
export type PostAssignmentGradesForSectionsPayload = {
  __typename?: 'PostAssignmentGradesForSectionsPayload';
  assignment?: Maybe<Assignment>;
  errors?: Maybe<Array<ValidationError>>;
  progress?: Maybe<Progress>;
  sections?: Maybe<Array<Section>>;
};

/** Autogenerated input type of PostAssignmentGrades */
export type PostAssignmentGradesInput = {
  assignmentId: Scalars['ID']['input'];
  gradedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  onlyStudentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  sectionIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  skipStudentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Autogenerated return type of PostAssignmentGrades. */
export type PostAssignmentGradesPayload = {
  __typename?: 'PostAssignmentGradesPayload';
  assignment?: Maybe<Assignment>;
  errors?: Maybe<Array<ValidationError>>;
  progress?: Maybe<Progress>;
  sections?: Maybe<Array<Section>>;
};

/** Autogenerated input type of PostDraftSubmissionComment */
export type PostDraftSubmissionCommentInput = {
  submissionCommentId: Scalars['ID']['input'];
};

/** Autogenerated return type of PostDraftSubmissionComment. */
export type PostDraftSubmissionCommentPayload = {
  __typename?: 'PostDraftSubmissionCommentPayload';
  errors?: Maybe<Array<ValidationError>>;
  submissionComment?: Maybe<SubmissionComment>;
};

/**
 * A PostPolicy sets the policy for whether a Submission's grades are posted
 * automatically or manually. A PostPolicy can be set at the Course and/or
 * Assignment level.
 */
export type PostPolicy = LegacyIdInterface & Node & {
  __typename?: 'PostPolicy';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  assignment?: Maybe<Assignment>;
  course: Course;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  postManually: Scalars['Boolean']['output'];
};

/** The connection type for PostPolicy. */
export type PostPolicyConnection = {
  __typename?: 'PostPolicyConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PostPolicyEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PostPolicy>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PostPolicyEdge = {
  __typename?: 'PostPolicyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<PostPolicy>;
};

/** Customized proficiency rating */
export type ProficiencyRating = LegacyIdInterface & {
  __typename?: 'ProficiencyRating';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  color?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  mastery: Scalars['Boolean']['output'];
  points?: Maybe<Scalars['Float']['output']>;
};

/** The connection type for ProficiencyRating. */
export type ProficiencyRatingConnection = {
  __typename?: 'ProficiencyRatingConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProficiencyRatingEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ProficiencyRating>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProficiencyRatingEdge = {
  __typename?: 'ProficiencyRatingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ProficiencyRating>;
};

export type ProficiencyRatingInput = {
  description: Scalars['String']['input'];
  points: Scalars['Float']['input'];
};

/** Returns completion status and progress information about an asynchronous job */
export type Progress = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'Progress';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  /** percent completed */
  completion?: Maybe<Scalars['Int']['output']>;
  context?: Maybe<ProgressContext>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** details about the job */
  message?: Maybe<Scalars['String']['output']>;
  state: ProgressState;
  /** the type of operation */
  tag: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProgressContext = Assignment | Course | File | GroupSet | User;

export enum ProgressState {
  Completed = 'completed',
  Failed = 'failed',
  Queued = 'queued',
  Running = 'running'
}

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  /** All courses viewable by the current user */
  allCourses?: Maybe<Array<Course>>;
  assignment?: Maybe<Assignment>;
  assignmentGroup?: Maybe<AssignmentGroup>;
  auditLogs?: Maybe<AuditLogs>;
  course?: Maybe<Course>;
  /** Folder */
  folder?: Maybe<Folder>;
  /** Retrieves a single internal setting by its ID or name */
  internalSetting?: Maybe<InternalSetting>;
  /** All internal settings */
  internalSettings?: Maybe<Array<InternalSetting>>;
  /** LearningOutcome */
  learningOutcome?: Maybe<LearningOutcome>;
  /** LearningOutcomeGroup */
  learningOutcomeGroup?: Maybe<LearningOutcomeGroup>;
  /** Fetches an object given its type and legacy ID */
  legacyNode?: Maybe<Node>;
  /** ModuleItem */
  moduleItem?: Maybe<ModuleItem>;
  myInboxSettings?: Maybe<InboxSettings>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** OutcomeCalculationMethod */
  outcomeCalculationMethod?: Maybe<OutcomeCalculationMethod>;
  /** OutcomeProficiency */
  outcomeProficiency?: Maybe<OutcomeProficiency>;
  /** Rubric */
  rubric?: Maybe<Rubric>;
  submission?: Maybe<Submission>;
  term?: Maybe<Term>;
};


export type QueryAccountArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  sisId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAssignmentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  sisId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAssignmentGroupArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  sisId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCourseArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  sisId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFolderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInternalSettingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLearningOutcomeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLearningOutcomeGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLegacyNodeArgs = {
  _id: Scalars['ID']['input'];
  type: NodeType;
};


export type QueryModuleItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOutcomeCalculationMethodArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOutcomeProficiencyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRubricArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySubmissionArgs = {
  anonymousId?: InputMaybe<Scalars['ID']['input']>;
  assignmentId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTermArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  sisId?: InputMaybe<Scalars['String']['input']>;
};

export type Quiz = LegacyIdInterface & ModuleItemInterface & Node & Timestamped & {
  __typename?: 'Quiz';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  anonymousSubmissions: Scalars['Boolean']['output'];
  canDuplicate?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the module item can be unpublished */
  canUnpublish?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  graded?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isLockedByMasterCourse: Scalars['Boolean']['output'];
  modules?: Maybe<Array<Module>>;
  pointsPossible?: Maybe<Scalars['Float']['output']>;
  /** Whether the module item is published */
  published?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** The connection type for Quiz. */
export type QuizConnection = {
  __typename?: 'QuizConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<QuizEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Quiz>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type QuizEdge = {
  __typename?: 'QuizEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Quiz>;
};

export type QuizFilter = {
  /** only return quizzes whose title matches this search term */
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  /**
   * only return quizzes for the given user. Defaults to
   * the current user.
   */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type QuizItem = {
  __typename?: 'QuizItem';
  _id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type QuizzesConnectionInterface = {
  /** returns a list of quizzes. */
  quizzesConnection?: Maybe<QuizConnection>;
};


export type QuizzesConnectionInterfaceQuizzesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<QuizFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum RatingInputType {
  Liked = 'liked',
  NotLiked = 'not_liked'
}

export type Recipients = {
  __typename?: 'Recipients';
  contextsConnection?: Maybe<MessageableContextConnection>;
  sendMessagesAll?: Maybe<Scalars['Boolean']['output']>;
  usersConnection?: Maybe<MessageableUserConnection>;
};


export type RecipientsContextsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type RecipientsUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum ReportType {
  Inappropriate = 'inappropriate',
  Offensive = 'offensive',
  Other = 'other'
}

export type Requirement = {
  __typename?: 'Requirement';
  id: Scalars['ID']['output'];
  minPercentage?: Maybe<Scalars['Float']['output']>;
  minScore?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type Rubric = LegacyIdInterface & Node & {
  __typename?: 'Rubric';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  buttonDisplay: Scalars['String']['output'];
  /** The different criteria that makes up this rubric */
  criteria: Array<RubricCriterion>;
  criteriaCount: Scalars['Int']['output'];
  freeFormCriterionComments: Scalars['Boolean']['output'];
  hasRubricAssociations: Scalars['Boolean']['output'];
  hidePoints?: Maybe<Scalars['Boolean']['output']>;
  hideScoreTotal: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  pointsPossible?: Maybe<Scalars['Float']['output']>;
  ratingOrder: Scalars['String']['output'];
  rubricAssociationForContext?: Maybe<RubricAssociation>;
  title?: Maybe<Scalars['String']['output']>;
  unassessed: Scalars['Boolean']['output'];
  workflowState: Scalars['String']['output'];
};

/** An assessment for a rubric */
export type RubricAssessment = LegacyIdInterface & {
  __typename?: 'RubricAssessment';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  artifactAttempt: Scalars['Int']['output'];
  /** The assessments for the individual criteria in this rubric */
  assessmentRatings?: Maybe<Array<RubricAssessmentRating>>;
  assessmentType: AssessmentType;
  assessor?: Maybe<User>;
  rubricAssociation?: Maybe<RubricAssociation>;
  score?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

/** The connection type for RubricAssessment. */
export type RubricAssessmentConnection = {
  __typename?: 'RubricAssessmentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RubricAssessmentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<RubricAssessment>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RubricAssessmentEdge = {
  __typename?: 'RubricAssessmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<RubricAssessment>;
};

/** An assessment for a specific criteria in a rubric */
export type RubricAssessmentRating = {
  __typename?: 'RubricAssessmentRating';
  /** legacy canvas id */
  _id?: Maybe<Scalars['ID']['output']>;
  artifactAttempt: Scalars['Int']['output'];
  comments?: Maybe<Scalars['String']['output']>;
  commentsEnabled: Scalars['Boolean']['output'];
  commentsHtml?: Maybe<Scalars['String']['output']>;
  /** The rubric criteria that this assessment is for */
  criterion?: Maybe<RubricCriterion>;
  description?: Maybe<Scalars['String']['output']>;
  outcome?: Maybe<LearningOutcome>;
  points?: Maybe<Scalars['Float']['output']>;
  rubricAssessmentId: Scalars['ID']['output'];
};

/** How a rubric is being used in a context */
export type RubricAssociation = LegacyIdInterface & {
  __typename?: 'RubricAssociation';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  hideOutcomeResults: Scalars['Boolean']['output'];
  hidePoints: Scalars['Boolean']['output'];
  hideScoreTotal: Scalars['Boolean']['output'];
  savedComments?: Maybe<Scalars['String']['output']>;
  useForGrading: Scalars['Boolean']['output'];
};

/** The connection type for Rubric. */
export type RubricConnection = {
  __typename?: 'RubricConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RubricEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Rubric>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Individual criteria for a rubric */
export type RubricCriterion = LegacyIdInterface & {
  __typename?: 'RubricCriterion';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  criterionUseRange: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  ignoreForScoring: Scalars['Boolean']['output'];
  learningOutcomeId?: Maybe<Scalars['ID']['output']>;
  longDescription?: Maybe<Scalars['String']['output']>;
  masteryPoints?: Maybe<Scalars['Float']['output']>;
  outcome?: Maybe<LearningOutcome>;
  points?: Maybe<Scalars['Float']['output']>;
  /** The possible ratings available for this criterion */
  ratings?: Maybe<Array<RubricRating>>;
};

/** An edge in a connection. */
export type RubricEdge = {
  __typename?: 'RubricEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Rubric>;
};

/** Possible rating for a rubric criterion */
export type RubricRating = LegacyIdInterface & {
  __typename?: 'RubricRating';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  longDescription?: Maybe<Scalars['String']['output']>;
  points: Scalars['Float']['output'];
  rubricId: Scalars['ID']['output'];
};

/** Autogenerated input type of SaveRubricAssessment */
export type SaveRubricAssessmentInput = {
  assessmentDetails: Scalars['JSON']['input'];
  gradedAnonymously: Scalars['Boolean']['input'];
  provisional?: InputMaybe<Scalars['Boolean']['input']>;
  rubricAssessmentId?: InputMaybe<Scalars['ID']['input']>;
  rubricAssociationId: Scalars['ID']['input'];
  submissionId: Scalars['ID']['input'];
};

/** Autogenerated return type of SaveRubricAssessment. */
export type SaveRubricAssessmentPayload = {
  __typename?: 'SaveRubricAssessmentPayload';
  errors?: Maybe<Array<ValidationError>>;
  rubricAssessment?: Maybe<RubricAssessment>;
  submission?: Maybe<Submission>;
};

export type Section = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'Section';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  allStudents?: Maybe<UserConnection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  gradesPosted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sisId?: Maybe<Scalars['String']['output']>;
  students?: Maybe<UserConnection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userCount: Scalars['Int']['output'];
};


export type SectionAllStudentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type SectionGradesPostedArgs = {
  assignmentId?: InputMaybe<Scalars['ID']['input']>;
};


export type SectionStudentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for Section. */
export type SectionConnection = {
  __typename?: 'SectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SectionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Section>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SectionEdge = {
  __typename?: 'SectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Section>;
};

/**
 * Determines if/how a student may join a group. A student can belong to
 * only one group per group set at a time.
 */
export enum SelfSignupPolicy {
  /** self signup is not allowed */
  Disabled = 'disabled',
  /** students may join any group */
  Enabled = 'enabled',
  /** students may join a group in their section */
  Restricted = 'restricted'
}

/** Autogenerated input type of SetAssignmentPostPolicy */
export type SetAssignmentPostPolicyInput = {
  assignmentId: Scalars['ID']['input'];
  postManually: Scalars['Boolean']['input'];
};

/** Autogenerated return type of SetAssignmentPostPolicy. */
export type SetAssignmentPostPolicyPayload = {
  __typename?: 'SetAssignmentPostPolicyPayload';
  errors?: Maybe<Array<ValidationError>>;
  postPolicy?: Maybe<PostPolicy>;
};

/** Autogenerated input type of SetCoursePostPolicy */
export type SetCoursePostPolicyInput = {
  courseId: Scalars['ID']['input'];
  postManually: Scalars['Boolean']['input'];
};

/** Autogenerated return type of SetCoursePostPolicy. */
export type SetCoursePostPolicyPayload = {
  __typename?: 'SetCoursePostPolicyPayload';
  errors?: Maybe<Array<ValidationError>>;
  postPolicy?: Maybe<PostPolicy>;
};

/** Autogenerated input type of SetFriendlyDescription */
export type SetFriendlyDescriptionInput = {
  contextId: Scalars['ID']['input'];
  contextType: Scalars['String']['input'];
  description: Scalars['String']['input'];
  outcomeId: Scalars['ID']['input'];
};

/** Autogenerated return type of SetFriendlyDescription. */
export type SetFriendlyDescriptionPayload = {
  __typename?: 'SetFriendlyDescriptionPayload';
  errors?: Maybe<Array<ValidationError>>;
  outcomeFriendlyDescription?: Maybe<OutcomeFriendlyDescriptionType>;
};

/** Autogenerated input type of SetModuleItemCompletion */
export type SetModuleItemCompletionInput = {
  done: Scalars['Boolean']['input'];
  itemId: Scalars['ID']['input'];
  moduleId: Scalars['ID']['input'];
};

/** Autogenerated return type of SetModuleItemCompletion. */
export type SetModuleItemCompletionPayload = {
  __typename?: 'SetModuleItemCompletionPayload';
  errors?: Maybe<Array<ValidationError>>;
  moduleItem: ModuleItem;
};

/** Autogenerated input type of SetOverrideScore */
export type SetOverrideScoreInput = {
  enrollmentId: Scalars['ID']['input'];
  gradingPeriodId?: InputMaybe<Scalars['ID']['input']>;
  overrideScore?: InputMaybe<Scalars['Float']['input']>;
};

/** Autogenerated return type of SetOverrideScore. */
export type SetOverrideScorePayload = {
  __typename?: 'SetOverrideScorePayload';
  errors?: Maybe<Array<ValidationError>>;
  grades?: Maybe<Grades>;
};

/** Autogenerated input type of SetOverrideStatus */
export type SetOverrideStatusInput = {
  customGradeStatusId?: InputMaybe<Scalars['ID']['input']>;
  enrollmentId: Scalars['ID']['input'];
  gradingPeriodId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated return type of SetOverrideStatus. */
export type SetOverrideStatusPayload = {
  __typename?: 'SetOverrideStatusPayload';
  errors?: Maybe<Array<ValidationError>>;
  grades?: Maybe<Grades>;
};

/** Autogenerated input type of SetRubricSelfAssessment */
export type SetRubricSelfAssessmentInput = {
  assignmentId: Scalars['ID']['input'];
  rubricSelfAssessmentEnabled: Scalars['Boolean']['input'];
};

/** Autogenerated return type of SetRubricSelfAssessment. */
export type SetRubricSelfAssessmentPayload = {
  __typename?: 'SetRubricSelfAssessmentPayload';
  errors?: Maybe<Array<ValidationError>>;
};

export type SpeedGraderSettings = {
  __typename?: 'SpeedGraderSettings';
  gradeByQuestion: Scalars['Boolean']['output'];
};

export type StandardGradeStatus = LegacyIdInterface & Node & {
  __typename?: 'StandardGradeStatus';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  color: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** The connection type for StandardGradeStatus. */
export type StandardGradeStatusConnection = {
  __typename?: 'StandardGradeStatusConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StandardGradeStatusEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<StandardGradeStatus>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type StandardGradeStatusEdge = {
  __typename?: 'StandardGradeStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<StandardGradeStatus>;
};

/** Valid sticker types for submissions */
export enum Sticker {
  Apple = 'apple',
  Basketball = 'basketball',
  Beaker = 'beaker',
  Bell = 'bell',
  Book = 'book',
  Bookbag = 'bookbag',
  Briefcase = 'briefcase',
  Bus = 'bus',
  Calculator = 'calculator',
  Calendar = 'calendar',
  Chem = 'chem',
  Clock = 'clock',
  Column = 'column',
  CompositeNotebook = 'composite_notebook',
  Computer = 'computer',
  Design = 'design',
  Globe = 'globe',
  Grad = 'grad',
  Gym = 'gym',
  Mail = 'mail',
  Microscope = 'microscope',
  Mouse = 'mouse',
  Music = 'music',
  Notebook = 'notebook',
  Page = 'page',
  Paintbrush = 'paintbrush',
  Panda1 = 'panda1',
  Panda2 = 'panda2',
  Panda3 = 'panda3',
  Panda4 = 'panda4',
  Panda5 = 'panda5',
  Panda6 = 'panda6',
  Panda7 = 'panda7',
  Panda8 = 'panda8',
  Panda9 = 'panda9',
  Paperclip = 'paperclip',
  Pen = 'pen',
  Pencil = 'pencil',
  Presentation = 'presentation',
  Ruler = 'ruler',
  Science = 'science',
  Science2 = 'science2',
  Scissors = 'scissors',
  Star = 'star',
  Tablet = 'tablet',
  Tag = 'tag',
  Tape = 'tape',
  Target = 'target',
  Telescope = 'telescope',
  Trophy = 'trophy'
}

/** An activity stream summary item */
export type StreamSummaryItem = {
  __typename?: 'StreamSummaryItem';
  count?: Maybe<Scalars['Int']['output']>;
  notificationCategory?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unreadCount?: Maybe<Scalars['Int']['output']>;
};

/** basic information about a students activity in a course */
export type StudentSummaryAnalytics = {
  __typename?: 'StudentSummaryAnalytics';
  pageViews?: Maybe<PageViewAnalysis>;
  participations?: Maybe<PageViewAnalysis>;
  tardinessBreakdown?: Maybe<TardinessBreakdown>;
};

export type SubAssignmentSubmission = {
  __typename?: 'SubAssignmentSubmission';
  assignmentId: Scalars['ID']['output'];
  customGradeStatusId?: Maybe<Scalars['ID']['output']>;
  /** the submission grade *before* late policy deductions were applied */
  enteredGrade?: Maybe<Scalars['String']['output']>;
  /** the submission score *before* late policy deductions were applied */
  enteredScore?: Maybe<Scalars['Float']['output']>;
  /** excused assignments are ignored when calculating grades */
  excused?: Maybe<Scalars['Boolean']['output']>;
  grade?: Maybe<Scalars['String']['output']>;
  gradeMatchesCurrentSubmission?: Maybe<Scalars['Boolean']['output']>;
  publishedGrade?: Maybe<Scalars['String']['output']>;
  publishedScore?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  secondsLate?: Maybe<Scalars['Int']['output']>;
  statusTag: SubmissionStatusTagType;
  subAssignmentTag?: Maybe<Scalars['String']['output']>;
};

export type SubHeader = ModuleItemInterface & {
  __typename?: 'SubHeader';
  canDuplicate?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the module item can be unpublished */
  canUnpublish?: Maybe<Scalars['Boolean']['output']>;
  graded?: Maybe<Scalars['Boolean']['output']>;
  isLockedByMasterCourse: Scalars['Boolean']['output'];
  modules?: Maybe<Array<Module>>;
  pointsPossible?: Maybe<Scalars['Float']['output']>;
  /** Whether the module item is published */
  published?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Submission = LegacyIdInterface & Node & SubmissionInterface & Timestamped & {
  __typename?: 'Submission';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  anonymousId?: Maybe<Scalars['ID']['output']>;
  assignedAssessments?: Maybe<Array<AssessmentRequest>>;
  assignment?: Maybe<Assignment>;
  assignmentId: Scalars['ID']['output'];
  attachment?: Maybe<File>;
  attachments?: Maybe<Array<File>>;
  attempt: Scalars['Int']['output'];
  auditEventsConnection?: Maybe<AuditEventConnection>;
  /** Issues related to the submission */
  autoGradeSubmissionErrors: Array<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  cachedDueDate?: Maybe<Scalars['DateTime']['output']>;
  commentsConnection?: Maybe<SubmissionCommentConnection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customGradeStatus?: Maybe<Scalars['String']['output']>;
  customGradeStatusId?: Maybe<Scalars['ID']['output']>;
  /** how many points are being deducted due to late policy */
  deductedPoints?: Maybe<Scalars['Float']['output']>;
  enrollmentsConnection?: Maybe<EnrollmentConnection>;
  /** the submission grade *before* late policy deductions were applied */
  enteredGrade?: Maybe<Scalars['String']['output']>;
  /** the submission score *before* late policy deductions were applied */
  enteredScore?: Maybe<Scalars['Float']['output']>;
  /** excused assignments are ignored when calculating grades */
  excused?: Maybe<Scalars['Boolean']['output']>;
  externalToolUrl?: Maybe<Scalars['String']['output']>;
  extraAttempts?: Maybe<Scalars['Int']['output']>;
  feedbackForCurrentAttempt: Scalars['Boolean']['output'];
  grade?: Maybe<Scalars['String']['output']>;
  gradeHidden: Scalars['Boolean']['output'];
  /** was the grade given on the current submission (resubmission) */
  gradeMatchesCurrentSubmission?: Maybe<Scalars['Boolean']['output']>;
  gradedAnonymously?: Maybe<Scalars['Boolean']['output']>;
  gradedAt?: Maybe<Scalars['DateTime']['output']>;
  gradingPeriodId?: Maybe<Scalars['ID']['output']>;
  gradingStatus?: Maybe<SubmissionGradingStatus>;
  groupId?: Maybe<Scalars['ID']['output']>;
  hasPostableComments: Scalars['Boolean']['output'];
  hasUnreadRubricAssessment: Scalars['Boolean']['output'];
  /** hide unpublished grades */
  hideGradeFromStudent?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  lastCommentedByUserAt?: Maybe<Scalars['DateTime']['output']>;
  late?: Maybe<Scalars['Boolean']['output']>;
  latePolicyStatus?: Maybe<LatePolicyStatusType>;
  /** Lti Asset Reports with active processors, with assets preloaded */
  ltiAssetReportsConnection?: Maybe<LtiAssetReportConnection>;
  mediaObject?: Maybe<MediaObject>;
  missing?: Maybe<Scalars['Boolean']['output']>;
  originalityData?: Maybe<Scalars['JSON']['output']>;
  posted: Scalars['Boolean']['output'];
  postedAt?: Maybe<Scalars['DateTime']['output']>;
  /** This field is currently under development and its return value is subject to change. */
  previewUrl?: Maybe<Scalars['String']['output']>;
  proxySubmitter?: Maybe<Scalars['String']['output']>;
  proxySubmitterId?: Maybe<Scalars['ID']['output']>;
  readState?: Maybe<Scalars['String']['output']>;
  redoRequest?: Maybe<Scalars['Boolean']['output']>;
  resourceLinkLookupUuid?: Maybe<Scalars['String']['output']>;
  rubricAssessmentsConnection?: Maybe<RubricAssessmentConnection>;
  score?: Maybe<Scalars['Float']['output']>;
  secondsLate?: Maybe<Scalars['Float']['output']>;
  state: SubmissionState;
  status: Scalars['String']['output'];
  statusTag: SubmissionStatusTagType;
  sticker?: Maybe<Scalars['String']['output']>;
  studentEnteredScore?: Maybe<Scalars['Float']['output']>;
  subAssignmentSubmissions?: Maybe<Array<SubAssignmentSubmission>>;
  subAssignmentTag?: Maybe<Scalars['String']['output']>;
  submissionCommentDownloadUrl?: Maybe<Scalars['String']['output']>;
  submissionDraft?: Maybe<SubmissionDraft>;
  submissionHistoriesConnection?: Maybe<SubmissionHistoryConnection>;
  submissionStatus?: Maybe<Scalars['String']['output']>;
  submissionType?: Maybe<SubmissionType>;
  submittedAt?: Maybe<Scalars['DateTime']['output']>;
  turnitinData?: Maybe<Array<TurnitinData>>;
  unreadCommentCount: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
  wordCount?: Maybe<Scalars['Float']['output']>;
};


export type SubmissionAuditEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type SubmissionCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SubmissionCommentFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeDraftComments?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortOrder?: InputMaybe<SubmissionCommentsSortOrderType>;
};


export type SubmissionEnrollmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type SubmissionLtiAssetReportsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type SubmissionRubricAssessmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SubmissionRubricAssessmentFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type SubmissionSubmissionHistoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SubmissionHistoryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubmissionHistoryOrder>;
};

export type SubmissionComment = LegacyIdInterface & Timestamped & {
  __typename?: 'SubmissionComment';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  assignment?: Maybe<Assignment>;
  attachments?: Maybe<Array<File>>;
  attempt: Scalars['Int']['output'];
  author?: Maybe<User>;
  canReply?: Maybe<Scalars['Boolean']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  course?: Maybe<Course>;
  createdAt: Scalars['DateTime']['output'];
  draft: Scalars['Boolean']['output'];
  htmlComment?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mediaCommentId?: Maybe<Scalars['String']['output']>;
  mediaObject?: Maybe<MediaObject>;
  read: Scalars['Boolean']['output'];
  submissionId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** The connection type for SubmissionComment. */
export type SubmissionCommentConnection = {
  __typename?: 'SubmissionCommentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SubmissionCommentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SubmissionComment>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SubmissionCommentEdge = {
  __typename?: 'SubmissionCommentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<SubmissionComment>;
};

export type SubmissionCommentFilterInput = {
  /**
   * If all of the comments, regardless of the submission attempt, should be returned.
   * If this is true, the for_attempt argument will be ignored.
   */
  allComments?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * What submission attempt the comments should be returned for. If not specified,
   * it will return the comments for the current submission or submission history.
   */
  forAttempt?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Whether the current user is completing a peer review and should only see
   * comments authored by themselves.
   */
  peerReview?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum SubmissionCommentsSortOrderType {
  Asc = 'asc',
  Desc = 'desc'
}

/** The connection type for Submission. */
export type SubmissionConnection = {
  __typename?: 'SubmissionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SubmissionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Submission>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SubmissionDraft = LegacyIdInterface & {
  __typename?: 'SubmissionDraft';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  activeSubmissionType?: Maybe<DraftableSubmissionType>;
  attachments?: Maybe<Array<File>>;
  body?: Maybe<Scalars['String']['output']>;
  externalTool?: Maybe<ExternalTool>;
  ltiLaunchUrl?: Maybe<Scalars['URL']['output']>;
  mediaObject?: Maybe<MediaObject>;
  meetsAssignmentCriteria: Scalars['Boolean']['output'];
  meetsBasicLtiLaunchCriteria: Scalars['Boolean']['output'];
  meetsMediaRecordingCriteria: Scalars['Boolean']['output'];
  meetsStudentAnnotationCriteria: Scalars['Boolean']['output'];
  meetsTextEntryCriteria: Scalars['Boolean']['output'];
  meetsUploadCriteria: Scalars['Boolean']['output'];
  meetsUrlCriteria: Scalars['Boolean']['output'];
  resourceLinkLookupUuid?: Maybe<Scalars['String']['output']>;
  submissionAttempt: Scalars['Int']['output'];
  url?: Maybe<Scalars['URL']['output']>;
};


export type SubmissionDraftBodyArgs = {
  rewriteUrls?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An edge in a connection. */
export type SubmissionEdge = {
  __typename?: 'SubmissionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Submission>;
};

export type SubmissionFilterInput = {
  dueBetween?: InputMaybe<DateTimeRange>;
  gradedSince?: InputMaybe<Scalars['DateTime']['input']>;
  sectionIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  states?: InputMaybe<Array<SubmissionState>>;
  submittedSince?: InputMaybe<Scalars['DateTime']['input']>;
  updatedSince?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum SubmissionGradingStatus {
  Excused = 'excused',
  Graded = 'graded',
  NeedsGrading = 'needs_grading',
  NeedsReview = 'needs_review'
}

export type SubmissionHistory = SubmissionInterface & Timestamped & {
  __typename?: 'SubmissionHistory';
  anonymousId?: Maybe<Scalars['ID']['output']>;
  assignedAssessments?: Maybe<Array<AssessmentRequest>>;
  assignment?: Maybe<Assignment>;
  assignmentId: Scalars['ID']['output'];
  attachment?: Maybe<File>;
  attachments?: Maybe<Array<File>>;
  attempt: Scalars['Int']['output'];
  body?: Maybe<Scalars['String']['output']>;
  cachedDueDate?: Maybe<Scalars['DateTime']['output']>;
  commentsConnection?: Maybe<SubmissionCommentConnection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customGradeStatus?: Maybe<Scalars['String']['output']>;
  customGradeStatusId?: Maybe<Scalars['ID']['output']>;
  /** how many points are being deducted due to late policy */
  deductedPoints?: Maybe<Scalars['Float']['output']>;
  /** the submission grade *before* late policy deductions were applied */
  enteredGrade?: Maybe<Scalars['String']['output']>;
  /** the submission score *before* late policy deductions were applied */
  enteredScore?: Maybe<Scalars['Float']['output']>;
  /** excused assignments are ignored when calculating grades */
  excused?: Maybe<Scalars['Boolean']['output']>;
  externalToolUrl?: Maybe<Scalars['String']['output']>;
  extraAttempts?: Maybe<Scalars['Int']['output']>;
  feedbackForCurrentAttempt: Scalars['Boolean']['output'];
  grade?: Maybe<Scalars['String']['output']>;
  gradeHidden: Scalars['Boolean']['output'];
  /** was the grade given on the current submission (resubmission) */
  gradeMatchesCurrentSubmission?: Maybe<Scalars['Boolean']['output']>;
  gradedAnonymously?: Maybe<Scalars['Boolean']['output']>;
  gradedAt?: Maybe<Scalars['DateTime']['output']>;
  gradingStatus?: Maybe<SubmissionGradingStatus>;
  groupId?: Maybe<Scalars['ID']['output']>;
  hasPostableComments: Scalars['Boolean']['output'];
  hasUnreadRubricAssessment: Scalars['Boolean']['output'];
  /** hide unpublished grades */
  hideGradeFromStudent?: Maybe<Scalars['Boolean']['output']>;
  lastCommentedByUserAt?: Maybe<Scalars['DateTime']['output']>;
  late?: Maybe<Scalars['Boolean']['output']>;
  latePolicyStatus?: Maybe<LatePolicyStatusType>;
  mediaObject?: Maybe<MediaObject>;
  missing?: Maybe<Scalars['Boolean']['output']>;
  originalityData?: Maybe<Scalars['JSON']['output']>;
  posted: Scalars['Boolean']['output'];
  postedAt?: Maybe<Scalars['DateTime']['output']>;
  /** This field is currently under development and its return value is subject to change. */
  previewUrl?: Maybe<Scalars['String']['output']>;
  proxySubmitter?: Maybe<Scalars['String']['output']>;
  proxySubmitterId?: Maybe<Scalars['ID']['output']>;
  redoRequest?: Maybe<Scalars['Boolean']['output']>;
  resourceLinkLookupUuid?: Maybe<Scalars['String']['output']>;
  /** The canvas legacy id of the root submission this history belongs to */
  rootId: Scalars['ID']['output'];
  rubricAssessmentsConnection?: Maybe<RubricAssessmentConnection>;
  score?: Maybe<Scalars['Float']['output']>;
  secondsLate?: Maybe<Scalars['Float']['output']>;
  state: SubmissionState;
  status: Scalars['String']['output'];
  statusTag: SubmissionStatusTagType;
  sticker?: Maybe<Scalars['String']['output']>;
  subAssignmentSubmissions?: Maybe<Array<SubAssignmentSubmission>>;
  submissionCommentDownloadUrl?: Maybe<Scalars['String']['output']>;
  submissionDraft?: Maybe<SubmissionDraft>;
  submissionStatus?: Maybe<Scalars['String']['output']>;
  submissionType?: Maybe<SubmissionType>;
  submittedAt?: Maybe<Scalars['DateTime']['output']>;
  turnitinData?: Maybe<Array<TurnitinData>>;
  unreadCommentCount: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
  user?: Maybe<User>;
  wordCount?: Maybe<Scalars['Float']['output']>;
};


export type SubmissionHistoryCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SubmissionCommentFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeDraftComments?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortOrder?: InputMaybe<SubmissionCommentsSortOrderType>;
};


export type SubmissionHistoryRubricAssessmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SubmissionRubricAssessmentFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for SubmissionHistory. */
export type SubmissionHistoryConnection = {
  __typename?: 'SubmissionHistoryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SubmissionHistoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SubmissionHistory>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SubmissionHistoryEdge = {
  __typename?: 'SubmissionHistoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<SubmissionHistory>;
};

export type SubmissionHistoryFilterInput = {
  /**
   * If the most current submission should be included in the submission
   * history results. Defaults to true.
   */
  includeCurrentSubmission?: InputMaybe<Scalars['Boolean']['input']>;
  states?: InputMaybe<Array<SubmissionState>>;
};

/** Specify a sort for the results */
export type SubmissionHistoryOrder = {
  direction: OrderDirection;
  field: SubmissionHistoryOrderField;
};

/** The submission history field to sort by */
export enum SubmissionHistoryOrderField {
  Attempt = 'attempt'
}

/** Types for submission or submission history */
export type SubmissionInterface = {
  anonymousId?: Maybe<Scalars['ID']['output']>;
  assignedAssessments?: Maybe<Array<AssessmentRequest>>;
  assignment?: Maybe<Assignment>;
  assignmentId: Scalars['ID']['output'];
  attachment?: Maybe<File>;
  attachments?: Maybe<Array<File>>;
  attempt: Scalars['Int']['output'];
  body?: Maybe<Scalars['String']['output']>;
  cachedDueDate?: Maybe<Scalars['DateTime']['output']>;
  commentsConnection?: Maybe<SubmissionCommentConnection>;
  customGradeStatus?: Maybe<Scalars['String']['output']>;
  customGradeStatusId?: Maybe<Scalars['ID']['output']>;
  /** how many points are being deducted due to late policy */
  deductedPoints?: Maybe<Scalars['Float']['output']>;
  /** the submission grade *before* late policy deductions were applied */
  enteredGrade?: Maybe<Scalars['String']['output']>;
  /** the submission score *before* late policy deductions were applied */
  enteredScore?: Maybe<Scalars['Float']['output']>;
  /** excused assignments are ignored when calculating grades */
  excused?: Maybe<Scalars['Boolean']['output']>;
  externalToolUrl?: Maybe<Scalars['String']['output']>;
  extraAttempts?: Maybe<Scalars['Int']['output']>;
  feedbackForCurrentAttempt: Scalars['Boolean']['output'];
  grade?: Maybe<Scalars['String']['output']>;
  gradeHidden: Scalars['Boolean']['output'];
  /** was the grade given on the current submission (resubmission) */
  gradeMatchesCurrentSubmission?: Maybe<Scalars['Boolean']['output']>;
  gradedAnonymously?: Maybe<Scalars['Boolean']['output']>;
  gradedAt?: Maybe<Scalars['DateTime']['output']>;
  gradingStatus?: Maybe<SubmissionGradingStatus>;
  groupId?: Maybe<Scalars['ID']['output']>;
  hasPostableComments: Scalars['Boolean']['output'];
  hasUnreadRubricAssessment: Scalars['Boolean']['output'];
  /** hide unpublished grades */
  hideGradeFromStudent?: Maybe<Scalars['Boolean']['output']>;
  lastCommentedByUserAt?: Maybe<Scalars['DateTime']['output']>;
  late?: Maybe<Scalars['Boolean']['output']>;
  latePolicyStatus?: Maybe<LatePolicyStatusType>;
  mediaObject?: Maybe<MediaObject>;
  missing?: Maybe<Scalars['Boolean']['output']>;
  originalityData?: Maybe<Scalars['JSON']['output']>;
  posted: Scalars['Boolean']['output'];
  postedAt?: Maybe<Scalars['DateTime']['output']>;
  /** This field is currently under development and its return value is subject to change. */
  previewUrl?: Maybe<Scalars['String']['output']>;
  proxySubmitter?: Maybe<Scalars['String']['output']>;
  proxySubmitterId?: Maybe<Scalars['ID']['output']>;
  redoRequest?: Maybe<Scalars['Boolean']['output']>;
  resourceLinkLookupUuid?: Maybe<Scalars['String']['output']>;
  rubricAssessmentsConnection?: Maybe<RubricAssessmentConnection>;
  score?: Maybe<Scalars['Float']['output']>;
  secondsLate?: Maybe<Scalars['Float']['output']>;
  state: SubmissionState;
  status: Scalars['String']['output'];
  statusTag: SubmissionStatusTagType;
  sticker?: Maybe<Scalars['String']['output']>;
  subAssignmentSubmissions?: Maybe<Array<SubAssignmentSubmission>>;
  submissionCommentDownloadUrl?: Maybe<Scalars['String']['output']>;
  submissionDraft?: Maybe<SubmissionDraft>;
  submissionStatus?: Maybe<Scalars['String']['output']>;
  submissionType?: Maybe<SubmissionType>;
  submittedAt?: Maybe<Scalars['DateTime']['output']>;
  turnitinData?: Maybe<Array<TurnitinData>>;
  unreadCommentCount: Scalars['Int']['output'];
  url?: Maybe<Scalars['URL']['output']>;
  user?: Maybe<User>;
  wordCount?: Maybe<Scalars['Float']['output']>;
};


/** Types for submission or submission history */
export type SubmissionInterfaceCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SubmissionCommentFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeDraftComments?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortOrder?: InputMaybe<SubmissionCommentsSortOrderType>;
};


/** Types for submission or submission history */
export type SubmissionInterfaceRubricAssessmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SubmissionRubricAssessmentFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type SubmissionOrderCriteria = {
  direction?: InputMaybe<OrderDirection>;
  field: SubmissionOrderField;
};

export enum SubmissionOrderField {
  Id = '_id',
  GradedAt = 'gradedAt'
}

export type SubmissionRubricAssessmentFilterInput = {
  /**
   * it will return all rubric assessments for the current submission
   * or submission history.
   */
  forAllAttempts?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * What submission attempt the rubric assessment should be returned for. If not
   * specified, it will return the rubric assessment for the current submission
   * or submission history.
   */
  forAttempt?: InputMaybe<Scalars['Int']['input']>;
};

export type SubmissionSearchFilterInput = {
  /**
   * Return only submissions related to the given anonymous_id
   * There is no character restriction on this field
   */
  anonymousId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Filters submissions for deactivated and concluded users based on the calling user's
   * 'Show -> Inactive Enrollments' and 'Show -> Concluded Enrollments' settings in the Gradebook.
   * When true, this filter takes precedence over the include_concluded and include_deactivated filters.
   */
  applyGradebookEnrollmentFilters?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filters submissions for users in a specific group applied in the Gradebook. */
  applyGradebookGroupFilter?: InputMaybe<Scalars['Boolean']['input']>;
  enrollmentTypes?: InputMaybe<Array<EnrollmentType>>;
  /** Limit results by grading status */
  gradingStatus?: InputMaybe<SubmissionGradingStatus>;
  /** Include submissions for concluded students. */
  includeConcluded?: InputMaybe<Scalars['Boolean']['input']>;
  /** Include submissions for deactivated students. */
  includeDeactivated?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnsubmitted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Limit results to submissions that are late */
  late?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * For group assignments, include submissions for group representatives only.
   * Has no effect on non-group assignments or group assignments where students
   * are being graded individually.
   */
  representativesOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Limit results to submissions that scored below the specified value */
  scoredLessThan?: InputMaybe<Scalars['Float']['input']>;
  /** Limit results to submissions that scored above the specified value */
  scoredMoreThan?: InputMaybe<Scalars['Float']['input']>;
  sectionIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  states?: InputMaybe<Array<SubmissionState>>;
  /**
   * Return only submissions related to the given user_id
   * There is no character restriction on this field
   */
  userId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Return only submissions related to group representative for the user_id
   * There is no character restriction on this field
   */
  userRepresentativeId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * The partial name or full ID of the users to match and return in the
   * results list. Must be at least 3 characters.
   * Queries by administrative users will search on SIS ID, login ID, name, or email
   * address; non-administrative queries will only be compared against name.
   */
  userSearch?: InputMaybe<Scalars['String']['input']>;
};

/** Specify a sort for the results */
export type SubmissionSearchOrder = {
  direction?: InputMaybe<OrderDirection>;
  field: SubmissionSearchOrderField;
};

/** The user or submission field to sort by */
export enum SubmissionSearchOrderField {
  Score = 'score',
  SubmittedAt = 'submitted_at',
  Username = 'username'
}

export enum SubmissionState {
  Deleted = 'deleted',
  Graded = 'graded',
  PendingReview = 'pending_review',
  Submitted = 'submitted',
  Ungraded = 'ungraded',
  Unsubmitted = 'unsubmitted'
}

export type SubmissionStatistics = {
  __typename?: 'SubmissionStatistics';
  missingSubmissionsCount: Scalars['Int']['output'];
  submissionsDueThisWeekCount: Scalars['Int']['output'];
};

export enum SubmissionStatusTagType {
  Custom = 'custom',
  Excused = 'excused',
  Extended = 'extended',
  Late = 'late',
  Missing = 'missing',
  None = 'none'
}

/** Types of submissions an assignment accepts */
export enum SubmissionType {
  Attendance = 'attendance',
  BasicLtiLaunch = 'basic_lti_launch',
  DiscussionTopic = 'discussion_topic',
  ExternalTool = 'external_tool',
  MediaRecording = 'media_recording',
  None = 'none',
  NotGraded = 'not_graded',
  OnPaper = 'on_paper',
  OnlineQuiz = 'online_quiz',
  OnlineTextEntry = 'online_text_entry',
  OnlineUpload = 'online_upload',
  OnlineUrl = 'online_url',
  StudentAnnotation = 'student_annotation',
  WikiPage = 'wiki_page'
}

/** Autogenerated input type of SubscribeToDiscussionTopic */
export type SubscribeToDiscussionTopicInput = {
  discussionTopicId: Scalars['ID']['input'];
  subscribed: Scalars['Boolean']['input'];
};

/** Autogenerated return type of SubscribeToDiscussionTopic. */
export type SubscribeToDiscussionTopicPayload = {
  __typename?: 'SubscribeToDiscussionTopicPayload';
  discussionTopic: Discussion;
  errors?: Maybe<Array<ValidationError>>;
};

/** statistics based on timeliness of student submissions */
export type TardinessBreakdown = {
  __typename?: 'TardinessBreakdown';
  late?: Maybe<Scalars['Float']['output']>;
  missing?: Maybe<Scalars['Float']['output']>;
  onTime?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Term = LegacyIdInterface & Node & {
  __typename?: 'Term';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  /** courses for this term */
  coursesConnection?: Maybe<CourseConnection>;
  endAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  sisId?: Maybe<Scalars['String']['output']>;
  sisTermId?: Maybe<Scalars['ID']['output']>;
  startAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TermCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains timestamp metadata */
export type Timestamped = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TurnitinContext = File | Submission;

export type TurnitinData = {
  __typename?: 'TurnitinData';
  reportUrl?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  target: TurnitinContext;
};

/** Autogenerated input type of UpdateAccountDomainLookup */
export type UpdateAccountDomainLookupInput = {
  accountDomainId?: InputMaybe<Scalars['ID']['input']>;
  accountDomainLookupId: Scalars['ID']['input'];
  authenticationProvider?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of UpdateAccountDomainLookup. */
export type UpdateAccountDomainLookupPayload = {
  __typename?: 'UpdateAccountDomainLookupPayload';
  accountDomainLookup?: Maybe<AccountDomainLookup>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of UpdateAssignment */
export type UpdateAssignmentInput = {
  allowedAttempts?: InputMaybe<Scalars['Int']['input']>;
  allowedExtensions?: InputMaybe<Array<Scalars['String']['input']>>;
  /** requires anonymous_marking course feature to be set to true */
  anonymousGrading?: InputMaybe<Scalars['Boolean']['input']>;
  anonymousInstructorAnnotations?: InputMaybe<Scalars['Boolean']['input']>;
  assignmentGroupId?: InputMaybe<Scalars['ID']['input']>;
  assignmentOverrides?: InputMaybe<Array<AssignmentOverrideCreateOrUpdate>>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueAt?: InputMaybe<Scalars['DateTime']['input']>;
  forCheckpoints?: InputMaybe<Scalars['Boolean']['input']>;
  gradeGroupStudentsIndividually?: InputMaybe<Scalars['Boolean']['input']>;
  gradingStandardId?: InputMaybe<Scalars['ID']['input']>;
  gradingType?: InputMaybe<GradingType>;
  groupCategoryId?: InputMaybe<Scalars['ID']['input']>;
  groupSetId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  lockAt?: InputMaybe<Scalars['DateTime']['input']>;
  moderatedGrading?: InputMaybe<AssignmentModeratedGradingUpdate>;
  moduleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  omitFromFinalGrade?: InputMaybe<Scalars['Boolean']['input']>;
  onlyVisibleToOverrides?: InputMaybe<Scalars['Boolean']['input']>;
  peerReviews?: InputMaybe<AssignmentPeerReviewsUpdate>;
  pointsPossible?: InputMaybe<Scalars['Float']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  postToSis?: InputMaybe<Scalars['Boolean']['input']>;
  state?: InputMaybe<AssignmentState>;
  submissionTypes?: InputMaybe<Array<SubmissionType>>;
  unlockAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Autogenerated return type of UpdateAssignment. */
export type UpdateAssignmentPayload = {
  __typename?: 'UpdateAssignmentPayload';
  assignment?: Maybe<Assignment>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of UpdateCommentBankItem */
export type UpdateCommentBankItemInput = {
  comment: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of UpdateCommentBankItem. */
export type UpdateCommentBankItemPayload = {
  __typename?: 'UpdateCommentBankItemPayload';
  commentBankItem?: Maybe<CommentBankItem>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of UpdateConversationParticipants */
export type UpdateConversationParticipantsInput = {
  conversationIds: Array<Scalars['ID']['input']>;
  starred?: InputMaybe<Scalars['Boolean']['input']>;
  subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  workflowState?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of UpdateConversationParticipants. */
export type UpdateConversationParticipantsPayload = {
  __typename?: 'UpdateConversationParticipantsPayload';
  conversationParticipants?: Maybe<Array<ConversationParticipant>>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of UpdateDiscussionEntriesReadState */
export type UpdateDiscussionEntriesReadStateInput = {
  discussionEntryIds: Array<Scalars['ID']['input']>;
  read: Scalars['Boolean']['input'];
};

/** Autogenerated return type of UpdateDiscussionEntriesReadState. */
export type UpdateDiscussionEntriesReadStatePayload = {
  __typename?: 'UpdateDiscussionEntriesReadStatePayload';
  discussionEntries?: Maybe<Array<DiscussionEntry>>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of UpdateDiscussionEntry */
export type UpdateDiscussionEntryInput = {
  discussionEntryId: Scalars['ID']['input'];
  fileId?: InputMaybe<Scalars['ID']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  quotedEntryId?: InputMaybe<Scalars['ID']['input']>;
  removeAttachment?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of UpdateDiscussionEntryParticipant */
export type UpdateDiscussionEntryParticipantInput = {
  discussionEntryId: Scalars['ID']['input'];
  forcedReadState?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<RatingInputType>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  reportType?: InputMaybe<ReportType>;
};

/** Autogenerated return type of UpdateDiscussionEntryParticipant. */
export type UpdateDiscussionEntryParticipantPayload = {
  __typename?: 'UpdateDiscussionEntryParticipantPayload';
  discussionEntry: DiscussionEntry;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated return type of UpdateDiscussionEntry. */
export type UpdateDiscussionEntryPayload = {
  __typename?: 'UpdateDiscussionEntryPayload';
  discussionEntry?: Maybe<DiscussionEntry>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of UpdateDiscussionExpanded */
export type UpdateDiscussionExpandedInput = {
  discussionTopicId: Scalars['ID']['input'];
  expanded: Scalars['Boolean']['input'];
};

/** Autogenerated return type of UpdateDiscussionExpanded. */
export type UpdateDiscussionExpandedPayload = {
  __typename?: 'UpdateDiscussionExpandedPayload';
  discussionTopic: Discussion;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of UpdateDiscussionReadState */
export type UpdateDiscussionReadStateInput = {
  discussionTopicId: Scalars['ID']['input'];
  read: Scalars['Boolean']['input'];
};

/** Autogenerated return type of UpdateDiscussionReadState. */
export type UpdateDiscussionReadStatePayload = {
  __typename?: 'UpdateDiscussionReadStatePayload';
  discussionTopic: Discussion;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of UpdateDiscussionSortOrder */
export type UpdateDiscussionSortOrderInput = {
  discussionTopicId: Scalars['ID']['input'];
  sortOrder: DiscussionSortOrderType;
};

/** Autogenerated return type of UpdateDiscussionSortOrder. */
export type UpdateDiscussionSortOrderPayload = {
  __typename?: 'UpdateDiscussionSortOrderPayload';
  discussionTopic: Discussion;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of UpdateDiscussionThreadReadState */
export type UpdateDiscussionThreadReadStateInput = {
  discussionEntryId: Scalars['ID']['input'];
  read: Scalars['Boolean']['input'];
};

/** Autogenerated return type of UpdateDiscussionThreadReadState. */
export type UpdateDiscussionThreadReadStatePayload = {
  __typename?: 'UpdateDiscussionThreadReadStatePayload';
  discussionEntry: DiscussionEntry;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of UpdateDiscussionTopic */
export type UpdateDiscussionTopicInput = {
  allowRating?: InputMaybe<Scalars['Boolean']['input']>;
  anonymousState?: InputMaybe<DiscussionTopicAnonymousStateType>;
  assignment?: InputMaybe<AssignmentUpdate>;
  checkpoints?: InputMaybe<Array<DiscussionCheckpoints>>;
  delayedPostAt?: InputMaybe<Scalars['DateTime']['input']>;
  discussionTopicId: Scalars['ID']['input'];
  discussionType?: InputMaybe<DiscussionTopicDiscussionType>;
  expanded?: InputMaybe<Scalars['Boolean']['input']>;
  expandedLocked?: InputMaybe<Scalars['Boolean']['input']>;
  fileId?: InputMaybe<Scalars['ID']['input']>;
  groupCategoryId?: InputMaybe<Scalars['ID']['input']>;
  lockAt?: InputMaybe<Scalars['DateTime']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  notifyUsers?: InputMaybe<Scalars['Boolean']['input']>;
  onlyGradersCanRate?: InputMaybe<Scalars['Boolean']['input']>;
  onlyVisibleToOverrides?: InputMaybe<Scalars['Boolean']['input']>;
  podcastEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  podcastHasStudentPosts?: InputMaybe<Scalars['Boolean']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  removeAttachment?: InputMaybe<Scalars['Boolean']['input']>;
  requireInitialPost?: InputMaybe<Scalars['Boolean']['input']>;
  setCheckpoints?: InputMaybe<Scalars['Boolean']['input']>;
  sortOrder?: InputMaybe<DiscussionSortOrderType>;
  sortOrderLocked?: InputMaybe<Scalars['Boolean']['input']>;
  specificSections?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  todoDate?: InputMaybe<Scalars['DateTime']['input']>;
  ungradedDiscussionOverrides?: InputMaybe<Array<AssignmentOverrideCreateOrUpdate>>;
};

/** Autogenerated input type of UpdateDiscussionTopicParticipant */
export type UpdateDiscussionTopicParticipantInput = {
  discussionTopicId: Scalars['ID']['input'];
  expanded?: InputMaybe<Scalars['Boolean']['input']>;
  sortOrder?: InputMaybe<DiscussionSortOrderType>;
  summaryEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated return type of UpdateDiscussionTopicParticipant. */
export type UpdateDiscussionTopicParticipantPayload = {
  __typename?: 'UpdateDiscussionTopicParticipantPayload';
  discussionTopic: Discussion;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated return type of UpdateDiscussionTopic. */
export type UpdateDiscussionTopicPayload = {
  __typename?: 'UpdateDiscussionTopicPayload';
  discussionTopic?: Maybe<Discussion>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of UpdateGradebookGroupFilter */
export type UpdateGradebookGroupFilterInput = {
  anonymousId?: InputMaybe<Scalars['ID']['input']>;
  assignmentId: Scalars['ID']['input'];
  courseId: Scalars['ID']['input'];
};

/** Autogenerated return type of UpdateGradebookGroupFilter. */
export type UpdateGradebookGroupFilterPayload = {
  __typename?: 'UpdateGradebookGroupFilterPayload';
  errors?: Maybe<Array<ValidationError>>;
  groupName?: Maybe<Scalars['String']['output']>;
  reasonForChange?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of UpdateInternalSetting */
export type UpdateInternalSettingInput = {
  internalSettingId: Scalars['ID']['input'];
  value: Scalars['String']['input'];
};

/** Autogenerated return type of UpdateInternalSetting. */
export type UpdateInternalSettingPayload = {
  __typename?: 'UpdateInternalSettingPayload';
  errors?: Maybe<Array<ValidationError>>;
  internalSetting: InternalSetting;
};

/** Autogenerated input type of UpdateLearningOutcomeGroup */
export type UpdateLearningOutcomeGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  parentOutcomeGroupId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  vendorGuid?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of UpdateLearningOutcomeGroup. */
export type UpdateLearningOutcomeGroupPayload = {
  __typename?: 'UpdateLearningOutcomeGroupPayload';
  errors?: Maybe<Array<ValidationError>>;
  learningOutcomeGroup?: Maybe<LearningOutcomeGroup>;
};

/** Autogenerated input type of UpdateLearningOutcome */
export type UpdateLearningOutcomeInput = {
  calculationInt?: InputMaybe<Scalars['Int']['input']>;
  calculationMethod?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  masteryPoints?: InputMaybe<Scalars['Float']['input']>;
  ratings?: InputMaybe<Array<ProficiencyRatingInput>>;
  title: Scalars['String']['input'];
  vendorGuid?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of UpdateLearningOutcome. */
export type UpdateLearningOutcomePayload = {
  __typename?: 'UpdateLearningOutcomePayload';
  errors?: Maybe<Array<ValidationError>>;
  learningOutcome?: Maybe<LearningOutcome>;
};

/** Autogenerated input type of UpdateMyInboxSettings */
export type UpdateMyInboxSettingsInput = {
  outOfOfficeFirstDate?: InputMaybe<Scalars['String']['input']>;
  outOfOfficeLastDate?: InputMaybe<Scalars['String']['input']>;
  outOfOfficeMessage?: InputMaybe<Scalars['String']['input']>;
  outOfOfficeSubject?: InputMaybe<Scalars['String']['input']>;
  signature?: InputMaybe<Scalars['String']['input']>;
  useOutOfOffice: Scalars['Boolean']['input'];
  useSignature: Scalars['Boolean']['input'];
};

/** Autogenerated return type of UpdateMyInboxSettings. */
export type UpdateMyInboxSettingsPayload = {
  __typename?: 'UpdateMyInboxSettingsPayload';
  errors?: Maybe<Array<ValidationError>>;
  myInboxSettings?: Maybe<InboxSettings>;
};

/** Autogenerated input type of UpdateNotificationPreferences */
export type UpdateNotificationPreferencesInput = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  communicationChannelId?: InputMaybe<Scalars['ID']['input']>;
  contextType: NotificationPreferencesContextType;
  courseId?: InputMaybe<Scalars['ID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  frequency?: InputMaybe<NotificationFrequencyType>;
  hasReadPrivacyNotice?: InputMaybe<Scalars['Boolean']['input']>;
  isPolicyOverride?: InputMaybe<Scalars['Boolean']['input']>;
  notificationCategory?: InputMaybe<NotificationCategoryType>;
  sendObservedNamesInNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  sendScoresInEmails?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated return type of UpdateNotificationPreferences. */
export type UpdateNotificationPreferencesPayload = {
  __typename?: 'UpdateNotificationPreferencesPayload';
  errors?: Maybe<Array<ValidationError>>;
  user?: Maybe<User>;
};

/** Autogenerated input type of UpdateOutcomeCalculationMethod */
export type UpdateOutcomeCalculationMethodInput = {
  calculationInt?: InputMaybe<Scalars['Int']['input']>;
  calculationMethod?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of UpdateOutcomeCalculationMethod. */
export type UpdateOutcomeCalculationMethodPayload = {
  __typename?: 'UpdateOutcomeCalculationMethodPayload';
  errors?: Maybe<Array<ValidationError>>;
  outcomeCalculationMethod?: Maybe<OutcomeCalculationMethod>;
};

/** Autogenerated input type of UpdateOutcomeProficiency */
export type UpdateOutcomeProficiencyInput = {
  id: Scalars['ID']['input'];
  proficiencyRatings?: InputMaybe<Array<OutcomeProficiencyRatingCreate>>;
};

/** Autogenerated return type of UpdateOutcomeProficiency. */
export type UpdateOutcomeProficiencyPayload = {
  __typename?: 'UpdateOutcomeProficiencyPayload';
  errors?: Maybe<Array<ValidationError>>;
  outcomeProficiency?: Maybe<OutcomeProficiency>;
};

/** Autogenerated input type of UpdateRubricArchivedState */
export type UpdateRubricArchivedStateInput = {
  archived: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of UpdateRubricArchivedState. */
export type UpdateRubricArchivedStatePayload = {
  __typename?: 'UpdateRubricArchivedStatePayload';
  errors?: Maybe<Array<ValidationError>>;
  rubric?: Maybe<Rubric>;
};

/** Autogenerated input type of UpdateRubricAssessmentReadState */
export type UpdateRubricAssessmentReadStateInput = {
  submissionIds: Array<Scalars['ID']['input']>;
};

/** Autogenerated return type of UpdateRubricAssessmentReadState. */
export type UpdateRubricAssessmentReadStatePayload = {
  __typename?: 'UpdateRubricAssessmentReadStatePayload';
  errors?: Maybe<Array<ValidationError>>;
  submissions?: Maybe<Array<Submission>>;
};

/** Autogenerated input type of UpdateSpeedGraderSettings */
export type UpdateSpeedGraderSettingsInput = {
  gradeByQuestion: Scalars['Boolean']['input'];
};

/** Autogenerated return type of UpdateSpeedGraderSettings. */
export type UpdateSpeedGraderSettingsPayload = {
  __typename?: 'UpdateSpeedGraderSettingsPayload';
  errors?: Maybe<Array<ValidationError>>;
  speedGraderSettings: SpeedGraderSettings;
};

/** Autogenerated input type of UpdateSplitScreenViewDeeplyNestedAlert */
export type UpdateSplitScreenViewDeeplyNestedAlertInput = {
  splitScreenViewDeeplyNestedAlert: Scalars['Boolean']['input'];
};

/** Autogenerated return type of UpdateSplitScreenViewDeeplyNestedAlert. */
export type UpdateSplitScreenViewDeeplyNestedAlertPayload = {
  __typename?: 'UpdateSplitScreenViewDeeplyNestedAlertPayload';
  errors?: Maybe<Array<ValidationError>>;
  user: User;
};

/** Autogenerated input type of UpdateSubmissionSticker */
export type UpdateSubmissionStickerInput = {
  anonymousId: Scalars['ID']['input'];
  assignmentId: Scalars['ID']['input'];
  sticker?: InputMaybe<Sticker>;
};

/** Autogenerated return type of UpdateSubmissionSticker. */
export type UpdateSubmissionStickerPayload = {
  __typename?: 'UpdateSubmissionStickerPayload';
  errors?: Maybe<Array<ValidationError>>;
  submission: Submission;
};

/** Autogenerated input type of UpdateSubmissionStudentEnteredScore */
export type UpdateSubmissionStudentEnteredScoreInput = {
  enteredScore: Scalars['Float']['input'];
  submissionId: Scalars['ID']['input'];
};

/** Autogenerated return type of UpdateSubmissionStudentEnteredScore. */
export type UpdateSubmissionStudentEnteredScorePayload = {
  __typename?: 'UpdateSubmissionStudentEnteredScorePayload';
  errors?: Maybe<Array<ValidationError>>;
  submission?: Maybe<Submission>;
};

/** Autogenerated input type of UpdateSubmissionsGrade */
export type UpdateSubmissionsGradeInput = {
  score: Scalars['Int']['input'];
  submissionId: Scalars['ID']['input'];
};

/** Autogenerated return type of UpdateSubmissionsGrade. */
export type UpdateSubmissionsGradePayload = {
  __typename?: 'UpdateSubmissionsGradePayload';
  errors?: Maybe<Array<ValidationError>>;
  parentAssignmentSubmission?: Maybe<Submission>;
  submission?: Maybe<Submission>;
};

/** Autogenerated input type of UpdateSubmissionsGradeStatus */
export type UpdateSubmissionsGradeStatusInput = {
  checkpointTag?: InputMaybe<Scalars['String']['input']>;
  customGradeStatusId?: InputMaybe<Scalars['ID']['input']>;
  latePolicyStatus?: InputMaybe<Scalars['String']['input']>;
  submissionId: Scalars['ID']['input'];
};

/** Autogenerated return type of UpdateSubmissionsGradeStatus. */
export type UpdateSubmissionsGradeStatusPayload = {
  __typename?: 'UpdateSubmissionsGradeStatusPayload';
  errors?: Maybe<Array<ValidationError>>;
  submission?: Maybe<Submission>;
};

/** Autogenerated input type of UpdateSubmissionsReadState */
export type UpdateSubmissionsReadStateInput = {
  read: Scalars['Boolean']['input'];
  submissionIds: Array<Scalars['ID']['input']>;
};

/** Autogenerated return type of UpdateSubmissionsReadState. */
export type UpdateSubmissionsReadStatePayload = {
  __typename?: 'UpdateSubmissionsReadStatePayload';
  errors?: Maybe<Array<ValidationError>>;
  submissions?: Maybe<Array<Submission>>;
};

/** Autogenerated input type of UpdateUserDiscussionsSplitscreenView */
export type UpdateUserDiscussionsSplitscreenViewInput = {
  discussionsSplitscreenView: Scalars['Boolean']['input'];
};

/** Autogenerated return type of UpdateUserDiscussionsSplitscreenView. */
export type UpdateUserDiscussionsSplitscreenViewPayload = {
  __typename?: 'UpdateUserDiscussionsSplitscreenViewPayload';
  errors?: Maybe<Array<ValidationError>>;
  user: User;
};

/** Autogenerated input type of UpsertCustomGradeStatus */
export type UpsertCustomGradeStatusInput = {
  color: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

/** Autogenerated return type of UpsertCustomGradeStatus. */
export type UpsertCustomGradeStatusPayload = {
  __typename?: 'UpsertCustomGradeStatusPayload';
  customGradeStatus?: Maybe<CustomGradeStatus>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of UpsertStandardGradeStatus */
export type UpsertStandardGradeStatusInput = {
  color: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

/** Autogenerated return type of UpsertStandardGradeStatus. */
export type UpsertStandardGradeStatusPayload = {
  __typename?: 'UpsertStandardGradeStatusPayload';
  errors?: Maybe<Array<ValidationError>>;
  standardGradeStatus?: Maybe<StandardGradeStatus>;
};

export type UsageRights = LegacyIdInterface & Node & {
  __typename?: 'UsageRights';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  legalCopyright?: Maybe<Scalars['String']['output']>;
  license?: Maybe<Scalars['String']['output']>;
  useJustification?: Maybe<Scalars['String']['output']>;
};

export type User = LegacyIdInterface & Node & Timestamped & {
  __typename?: 'User';
  /** legacy canvas id */
  _id: Scalars['ID']['output'];
  activityStream?: Maybe<ActivityStream>;
  avatarUrl?: Maybe<Scalars['URL']['output']>;
  commentBankItemsConnection?: Maybe<CommentBankItemConnection>;
  conversationsConnection?: Maybe<ConversationParticipantConnection>;
  /**
   * Returns null if either of these conditions are met:
   * * the course is not module based
   * * no module in it has completion requirements
   * * the queried user is not a student in the course
   * * insufficient permissions for the request
   */
  courseProgression?: Maybe<CourseProgression>;
  courseRoles?: Maybe<Array<Scalars['String']['output']>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  discussionsSplitscreenView: Scalars['Boolean']['output'];
  email?: Maybe<Scalars['String']['output']>;
  enrollments: Array<Enrollment>;
  favoriteCoursesConnection?: Maybe<CourseConnection>;
  /** Favorite groups for the user. */
  favoriteGroupsConnection?: Maybe<GroupConnection>;
  /** **NOTE**: this only returns groups for the currently logged-in user. */
  groups?: Maybe<Array<Group>>;
  htmlUrl?: Maybe<Scalars['URL']['output']>;
  id: Scalars['ID']['output'];
  inboxLabels?: Maybe<Array<Scalars['String']['output']>>;
  integrationId?: Maybe<Scalars['String']['output']>;
  loginId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['HtmlEncodedString']['output']>;
  notificationPreferences?: Maybe<NotificationPreferences>;
  notificationPreferencesEnabled: Scalars['Boolean']['output'];
  pronouns?: Maybe<Scalars['String']['output']>;
  recipients?: Maybe<Recipients>;
  recipientsObservers?: Maybe<MessageableUserConnection>;
  /** A short name the user has selected, for use in conversations or other less formal places through the site. */
  shortName?: Maybe<Scalars['HtmlEncodedString']['output']>;
  sisId?: Maybe<Scalars['String']['output']>;
  /** The name of the user that is should be used for sorting groups of users, such as in the gradebook. */
  sortableName?: Maybe<Scalars['HtmlEncodedString']['output']>;
  summaryAnalytics?: Maybe<StudentSummaryAnalytics>;
  totalRecipients: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
  /** All submissions with comments that the current_user is able to view */
  viewableSubmissionsConnection?: Maybe<SubmissionConnection>;
};


export type UserActivityStreamArgs = {
  onlyActiveCourses?: InputMaybe<Scalars['Boolean']['input']>;
};


export type UserCommentBankItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type UserConversationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  showHorizonConversations?: InputMaybe<Scalars['Boolean']['input']>;
};


export type UserCourseRolesArgs = {
  builtInOnly?: InputMaybe<Scalars['Boolean']['input']>;
  courseId?: InputMaybe<Scalars['String']['input']>;
  roleTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type UserEnrollmentsArgs = {
  courseId?: InputMaybe<Scalars['ID']['input']>;
  currentOnly?: InputMaybe<Scalars['Boolean']['input']>;
  excludeConcluded?: InputMaybe<Scalars['Boolean']['input']>;
  horizonCourses?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<Array<Scalars['String']['input']>>;
  sort?: InputMaybe<EnrollmentsSortInputType>;
};


export type UserFavoriteCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dashboardFilter?: InputMaybe<DashboardObserveeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserFavoriteGroupsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeNonCollaborative?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserHtmlUrlArgs = {
  courseId?: InputMaybe<Scalars['ID']['input']>;
};


export type UserNotificationPreferencesEnabledArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  contextType: NotificationPreferencesContextType;
  courseId?: InputMaybe<Scalars['ID']['input']>;
};


export type UserRecipientsArgs = {
  context?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type UserRecipientsObserversArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  contextCode: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  recipientIds: Array<Scalars['String']['input']>;
};


export type UserSummaryAnalyticsArgs = {
  courseId: Scalars['ID']['input'];
};


export type UserTotalRecipientsArgs = {
  context?: InputMaybe<Scalars['String']['input']>;
};


export type UserViewableSubmissionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

export type ValidationError = {
  __typename?: 'ValidationError';
  attribute?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type SearchMutationLogQueryVariables = Exact<{
  assetString: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchMutationLogQuery = { __typename?: 'Query', auditLogs?: { __typename?: 'AuditLogs', mutationLogs?: { __typename?: 'MutationLogConnection', nodes?: Array<{ __typename?: 'MutationLog', assetString: string, mutationId: string, mutationName: string, timestamp?: any | null, params?: any | null, user?: { __typename?: 'User', _id: string, name?: any | null } | null, realUser?: { __typename?: 'User', _id: string, name?: any | null } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } | null } | null };

export type UpsertStandardGradingStatusMutationMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type UpsertStandardGradingStatusMutationMutation = { __typename?: 'Mutation', upsertStandardGradeStatus?: { __typename?: 'UpsertStandardGradeStatusPayload', standardGradeStatus?: { __typename?: 'StandardGradeStatus', name: string, color: string, id: string } | null, errors?: Array<{ __typename?: 'ValidationError', attribute?: string | null, message: string }> | null } | null };

export type UpsertCustomGradingStatusMutationMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type UpsertCustomGradingStatusMutationMutation = { __typename?: 'Mutation', upsertCustomGradeStatus?: { __typename?: 'UpsertCustomGradeStatusPayload', customGradeStatus?: { __typename?: 'CustomGradeStatus', name: string, color: string, id: string } | null, errors?: Array<{ __typename?: 'ValidationError', attribute?: string | null, message: string }> | null } | null };

export type DeleteCustomGradingStatusMutationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCustomGradingStatusMutationMutation = { __typename?: 'Mutation', deleteCustomGradeStatus?: { __typename?: 'DeleteCustomGradeStatusPayload', customGradeStatusId?: string | null, errors?: Array<{ __typename?: 'ValidationError', attribute?: string | null, message: string }> | null } | null };

export type UpdateInternalSettingMutationVariables = Exact<{
  internalSettingId: Scalars['ID']['input'];
  value: Scalars['String']['input'];
}>;


export type UpdateInternalSettingMutation = { __typename?: 'Mutation', updateInternalSetting?: { __typename?: 'UpdateInternalSettingPayload', internalSetting: { __typename?: 'InternalSetting', id: string, value?: string | null, secret: boolean }, errors?: Array<{ __typename?: 'ValidationError', message: string }> | null } | null };

export type DeleteInternalSettingMutationVariables = Exact<{
  internalSettingId: Scalars['ID']['input'];
}>;


export type DeleteInternalSettingMutation = { __typename?: 'Mutation', deleteInternalSetting?: { __typename?: 'DeleteInternalSettingPayload', internalSettingId: string, errors?: Array<{ __typename?: 'ValidationError', message: string }> | null } | null };

export type CreateInternalSettingMutationVariables = Exact<{
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
}>;


export type CreateInternalSettingMutation = { __typename?: 'Mutation', createInternalSetting?: { __typename?: 'CreateInternalSettingPayload', internalSetting?: { __typename?: 'InternalSetting', id: string, value?: string | null, secret: boolean } | null, errors?: Array<{ __typename?: 'ValidationError', message: string }> | null } | null };

export type GetInternalSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInternalSettingsQuery = { __typename?: 'Query', internalSettings?: Array<{ __typename?: 'InternalSetting', id: string, name: string, value?: string | null, secret: boolean }> | null };

export type GetHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHistoryQuery = { __typename?: 'Query', node?: { __typename: 'Account' } | { __typename: 'Assignment' } | { __typename: 'AssignmentGroup' } | { __typename: 'CommentBankItem' } | { __typename: 'CommunicationChannel' } | { __typename: 'ContentTag' } | { __typename: 'Conversation' } | { __typename: 'Course' } | { __typename: 'CustomGradeStatus' } | { __typename: 'Discussion' } | { __typename: 'DiscussionEntry' } | { __typename: 'Enrollment' } | { __typename: 'File' } | { __typename: 'Folder' } | { __typename: 'GradingPeriod' } | { __typename: 'GradingPeriodGroup' } | { __typename: 'GradingStandard' } | { __typename: 'Group' } | { __typename: 'GroupSet' } | { __typename: 'InternalSetting' } | { __typename: 'LearningOutcome' } | { __typename: 'LearningOutcomeGroup' } | { __typename: 'MediaObject' } | { __typename: 'MessageableContext' } | { __typename: 'MessageableUser' } | { __typename: 'Module' } | { __typename: 'ModuleItem' } | { __typename: 'ModuleProgression' } | { __typename: 'Notification' } | { __typename: 'NotificationPolicy' } | { __typename: 'OutcomeCalculationMethod' } | { __typename: 'OutcomeFriendlyDescriptionType' } | { __typename: 'OutcomeProficiency' } | { __typename: 'Page' } | { __typename: 'PostPolicy' } | { __typename: 'Progress' } | { __typename: 'Quiz' } | { __typename: 'Rubric' } | { __typename: 'Section' } | { __typename: 'StandardGradeStatus' } | { __typename: 'Submission', submissionHistoriesConnection?: { __typename?: 'SubmissionHistoryConnection', nodes?: Array<{ __typename?: 'SubmissionHistory', attempt: number } | null> | null } | null } | { __typename: 'Term' } | { __typename: 'UsageRights' } | { __typename: 'User' } | null };

export type GetCommentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCommentsQuery = { __typename?: 'Query', node?: { __typename: 'Account' } | { __typename: 'Assignment' } | { __typename: 'AssignmentGroup' } | { __typename: 'CommentBankItem' } | { __typename: 'CommunicationChannel' } | { __typename: 'ContentTag' } | { __typename: 'Conversation' } | { __typename: 'Course' } | { __typename: 'CustomGradeStatus' } | { __typename: 'Discussion' } | { __typename: 'DiscussionEntry' } | { __typename: 'Enrollment' } | { __typename: 'File' } | { __typename: 'Folder' } | { __typename: 'GradingPeriod' } | { __typename: 'GradingPeriodGroup' } | { __typename: 'GradingStandard' } | { __typename: 'Group' } | { __typename: 'GroupSet' } | { __typename: 'InternalSetting' } | { __typename: 'LearningOutcome' } | { __typename: 'LearningOutcomeGroup' } | { __typename: 'MediaObject' } | { __typename: 'MessageableContext' } | { __typename: 'MessageableUser' } | { __typename: 'Module' } | { __typename: 'ModuleItem' } | { __typename: 'ModuleProgression' } | { __typename: 'Notification' } | { __typename: 'NotificationPolicy' } | { __typename: 'OutcomeCalculationMethod' } | { __typename: 'OutcomeFriendlyDescriptionType' } | { __typename: 'OutcomeProficiency' } | { __typename: 'Page' } | { __typename: 'PostPolicy' } | { __typename: 'Progress' } | { __typename: 'Quiz' } | { __typename: 'Rubric' } | { __typename: 'Section' } | { __typename: 'StandardGradeStatus' } | { __typename: 'Submission', commentsConnection?: { __typename?: 'SubmissionCommentConnection', nodes?: Array<{ __typename?: 'SubmissionComment', _id: string, comment?: string | null } | null> | null } | null } | { __typename: 'Term' } | { __typename: 'UsageRights' } | { __typename: 'User' } | null };

export type GetCoursePeopleQueryQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  enrollmentRoleIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  sortField: CourseUsersSortFieldType;
  sortDirection?: InputMaybe<CourseUsersSortDirectionType>;
  enrollmentsSortField: EnrollmentsSortFieldType;
  enrollmentsSortDirection?: InputMaybe<EnrollmentsSortDirectionType>;
}>;


export type GetCoursePeopleQueryQuery = { __typename?: 'Query', course?: { __typename?: 'Course', usersConnection?: { __typename?: 'UserConnection', nodes?: Array<{ __typename?: 'User', name?: any | null, _id: string, sisId?: string | null, avatarUrl?: any | null, pronouns?: string | null, loginId?: string | null, enrollments: Array<{ __typename?: 'Enrollment', _id?: string | null, type: EnrollmentType, state: EnrollmentWorkflowState, lastActivityAt?: any | null, totalActivityTime?: number | null, canBeRemoved?: boolean | null, sisRole?: string | null, htmlUrl?: any | null, associatedUser?: { __typename?: 'User', _id: string, name?: any | null } | null, section?: { __typename?: 'Section', _id: string, name: string } | null }> } | null> | null } | null } | null };

export type GetDiscussionTopicQueryVariables = Exact<{
  discussionTopicId: Scalars['ID']['input'];
}>;


export type GetDiscussionTopicQuery = { __typename?: 'Query', legacyNode?: { __typename?: 'Account' } | { __typename?: 'Assignment' } | { __typename?: 'AssignmentGroup' } | { __typename?: 'CommentBankItem' } | { __typename?: 'CommunicationChannel' } | { __typename?: 'ContentTag' } | { __typename?: 'Conversation' } | { __typename?: 'Course' } | { __typename?: 'CustomGradeStatus' } | { __typename?: 'Discussion', _id: string, entryCounts?: { __typename?: 'DiscussionEntryCounts', repliesCount: number } | null } | { __typename?: 'DiscussionEntry' } | { __typename?: 'Enrollment' } | { __typename?: 'File' } | { __typename?: 'Folder' } | { __typename?: 'GradingPeriod' } | { __typename?: 'GradingPeriodGroup' } | { __typename?: 'GradingStandard' } | { __typename?: 'Group' } | { __typename?: 'GroupSet' } | { __typename?: 'InternalSetting' } | { __typename?: 'LearningOutcome' } | { __typename?: 'LearningOutcomeGroup' } | { __typename?: 'MediaObject' } | { __typename?: 'MessageableContext' } | { __typename?: 'MessageableUser' } | { __typename?: 'Module' } | { __typename?: 'ModuleItem' } | { __typename?: 'ModuleProgression' } | { __typename?: 'Notification' } | { __typename?: 'NotificationPolicy' } | { __typename?: 'OutcomeCalculationMethod' } | { __typename?: 'OutcomeFriendlyDescriptionType' } | { __typename?: 'OutcomeProficiency' } | { __typename?: 'Page' } | { __typename?: 'PostPolicy' } | { __typename?: 'Progress' } | { __typename?: 'Quiz' } | { __typename?: 'Rubric' } | { __typename?: 'Section' } | { __typename?: 'StandardGradeStatus' } | { __typename?: 'Submission' } | { __typename?: 'Term' } | { __typename?: 'UsageRights' } | { __typename?: 'User' } | null };

export type GradebookQueryQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
}>;


export type GradebookQueryQuery = { __typename?: 'Query', course?: { __typename?: 'Course', rootOutcomeGroup: { __typename?: 'LearningOutcomeGroup', outcomes: { __typename?: 'ContentTagConnection', nodes?: Array<{ __typename?: 'LearningOutcome', assessed: boolean, calculationInt?: number | null, calculationMethod?: string | null, description?: string | null, displayName?: string | null, masteryPoints?: number | null, pointsPossible?: number | null, title: string, id: string, ratings?: Array<{ __typename?: 'ProficiencyRating', mastery: boolean, points?: number | null, description?: string | null }> | null } | null> | null } }, enrollmentsConnection?: { __typename?: 'EnrollmentConnection', nodes?: Array<{ __typename?: 'Enrollment', courseSectionId?: string | null, state: EnrollmentWorkflowState, user?: { __typename?: 'User', name?: any | null, sortableName?: any | null, id: string } | null } | null> | null } | null, sectionsConnection?: { __typename?: 'SectionConnection', nodes?: Array<{ __typename?: 'Section', name: string, id: string } | null> | null } | null, submissionsConnection?: { __typename?: 'SubmissionConnection', nodes?: Array<{ __typename?: 'Submission', grade?: string | null, score?: number | null, assignmentId: string, redoRequest?: boolean | null, submittedAt?: any | null, userId?: string | null, state: SubmissionState, gradingPeriodId?: string | null, excused?: boolean | null, id: string, subAssignmentSubmissions?: Array<{ __typename?: 'SubAssignmentSubmission', grade?: string | null, score?: number | null, publishedGrade?: string | null, publishedScore?: number | null, assignmentId: string, gradeMatchesCurrentSubmission?: boolean | null, subAssignmentTag?: string | null, enteredGrade?: string | null, enteredScore?: number | null, excused?: boolean | null }> | null } | null> | null } | null, assignmentGroupsConnection?: { __typename?: 'AssignmentGroupConnection', nodes?: Array<{ __typename?: 'AssignmentGroup', name?: string | null, groupWeight?: number | null, sisId?: string | null, state: AssignmentGroupState, position?: number | null, id: string, rules?: { __typename?: 'AssignmentGroupRules', dropHighest?: number | null, dropLowest?: number | null } | null, assignmentsConnection?: { __typename?: 'AssignmentConnection', nodes?: Array<{ __typename?: 'Assignment', anonymizeStudents?: boolean | null, assignmentGroupId?: string | null, gradingType?: GradingType | null, name?: string | null, omitFromFinalGrade?: boolean | null, pointsPossible?: number | null, submissionTypes?: Array<SubmissionType> | null, dueAt?: any | null, groupCategoryId?: number | null, gradeGroupStudentsIndividually?: boolean | null, allowedAttempts?: number | null, anonymousGrading?: boolean | null, courseId?: string | null, gradesPublished?: boolean | null, htmlUrl?: any | null, postManually?: boolean | null, published?: boolean | null, hasSubmittedSubmissions?: boolean | null, inClosedGradingPeriod?: boolean | null, id: string, moderatedGrading?: boolean | null, checkpoints?: Array<{ __typename?: 'Checkpoint', unlockAt?: any | null, lockAt?: any | null, dueAt?: any | null, name?: string | null, pointsPossible: number, tag: string }> | null } | null> | null } | null } | null> | null } | null } | null };

export type GradebookStudentQueryQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
  userIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type GradebookStudentQueryQuery = { __typename?: 'Query', course?: { __typename?: 'Course', usersConnection?: { __typename?: 'UserConnection', nodes?: Array<{ __typename?: 'User', loginId?: string | null, name?: any | null, id: string, enrollments: Array<{ __typename?: 'Enrollment', id?: string | null, grades?: { __typename?: 'Grades', unpostedCurrentGrade?: string | null, unpostedCurrentScore?: number | null, unpostedFinalGrade?: string | null, unpostedFinalScore?: number | null } | null, section?: { __typename?: 'Section', name: string, id: string } | null }> } | null> | null } | null, submissionsConnection?: { __typename?: 'SubmissionConnection', nodes?: Array<{ __typename?: 'Submission', grade?: string | null, score?: number | null, enteredScore?: number | null, assignmentId: string, submissionType?: SubmissionType | null, submittedAt?: any | null, state: SubmissionState, sticker?: string | null, proxySubmitter?: string | null, excused?: boolean | null, late?: boolean | null, latePolicyStatus?: LatePolicyStatusType | null, missing?: boolean | null, userId?: string | null, cachedDueDate?: any | null, gradingPeriodId?: string | null, deductedPoints?: number | null, enteredGrade?: string | null, gradeMatchesCurrentSubmission?: boolean | null, customGradeStatus?: string | null, id: string, subAssignmentSubmissions?: Array<{ __typename?: 'SubAssignmentSubmission', grade?: string | null, score?: number | null, publishedGrade?: string | null, publishedScore?: number | null, assignmentId: string, gradeMatchesCurrentSubmission?: boolean | null, subAssignmentTag?: string | null, enteredGrade?: string | null, enteredScore?: number | null, excused?: boolean | null }> | null } | null> | null } | null } | null };

export type GradebookSubmissionCommentsQueryQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
  submissionId: Scalars['ID']['input'];
}>;


export type GradebookSubmissionCommentsQueryQuery = { __typename?: 'Query', submission?: { __typename?: 'Submission', commentsConnection?: { __typename?: 'SubmissionCommentConnection', nodes?: Array<{ __typename?: 'SubmissionComment', htmlComment?: string | null, updatedAt?: any | null, id: string, mediaObject?: { __typename?: 'MediaObject', mediaDownloadUrl?: string | null, id: string } | null, attachments?: Array<{ __typename?: 'File', displayName?: string | null, mimeClass?: string | null, url?: any | null, id: string }> | null, author?: { __typename?: 'User', name?: any | null, avatarUrl?: any | null, htmlUrl?: any | null, id: string } | null } | null> | null } | null } | null };

export type GradebookEnrollmentsQueryQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type GradebookEnrollmentsQueryQuery = { __typename?: 'Query', course?: { __typename?: 'Course', enrollmentsConnection?: { __typename?: 'EnrollmentConnection', nodes?: Array<{ __typename?: 'Enrollment', courseSectionId?: string | null, state: EnrollmentWorkflowState, user?: { __typename?: 'User', name?: any | null, sortableName?: any | null, id: string } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null } | null };

export type GradebookSubmissionsQueryQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type GradebookSubmissionsQueryQuery = { __typename?: 'Query', course?: { __typename?: 'Course', submissionsConnection?: { __typename?: 'SubmissionConnection', nodes?: Array<{ __typename?: 'Submission', grade?: string | null, score?: number | null, assignmentId: string, redoRequest?: boolean | null, submittedAt?: any | null, userId?: string | null, state: SubmissionState, gradingPeriodId?: string | null, excused?: boolean | null, id: string, subAssignmentSubmissions?: Array<{ __typename?: 'SubAssignmentSubmission', grade?: string | null, score?: number | null, publishedGrade?: string | null, publishedScore?: number | null, assignmentId: string, gradeMatchesCurrentSubmission?: boolean | null, subAssignmentTag?: string | null, enteredGrade?: string | null, enteredScore?: number | null, excused?: boolean | null }> | null } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null } | null };

export type GradebookSectionsQueryQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type GradebookSectionsQueryQuery = { __typename?: 'Query', course?: { __typename?: 'Course', sectionsConnection?: { __typename?: 'SectionConnection', nodes?: Array<{ __typename?: 'Section', name: string, id: string } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null } | null };

export type GradebookOutcomesQueryQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type GradebookOutcomesQueryQuery = { __typename?: 'Query', course?: { __typename?: 'Course', rootOutcomeGroup: { __typename?: 'LearningOutcomeGroup', outcomes: { __typename?: 'ContentTagConnection', nodes?: Array<{ __typename?: 'LearningOutcome', assessed: boolean, calculationInt?: number | null, calculationMethod?: string | null, description?: string | null, displayName?: string | null, masteryPoints?: number | null, pointsPossible?: number | null, title: string, id: string, ratings?: Array<{ __typename?: 'ProficiencyRating', mastery: boolean, points?: number | null, description?: string | null }> | null } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } } } | null };

export type GradebookAssignmentGroupsQueryQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type GradebookAssignmentGroupsQueryQuery = { __typename?: 'Query', course?: { __typename?: 'Course', assignmentGroupsConnection?: { __typename?: 'AssignmentGroupConnection', nodes?: Array<{ __typename?: 'AssignmentGroup', name?: string | null, groupWeight?: number | null, sisId?: string | null, state: AssignmentGroupState, position?: number | null, id: string, rules?: { __typename?: 'AssignmentGroupRules', dropHighest?: number | null, dropLowest?: number | null } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null } | null };

export type GradebookAssignmentsQueryQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type GradebookAssignmentsQueryQuery = { __typename?: 'Query', course?: { __typename?: 'Course', assignmentsConnection?: { __typename?: 'AssignmentConnection', nodes?: Array<{ __typename?: 'Assignment', anonymizeStudents?: boolean | null, assignmentGroupId?: string | null, gradingType?: GradingType | null, name?: string | null, omitFromFinalGrade?: boolean | null, pointsPossible?: number | null, submissionTypes?: Array<SubmissionType> | null, dueAt?: any | null, groupCategoryId?: number | null, gradeGroupStudentsIndividually?: boolean | null, allowedAttempts?: number | null, anonymousGrading?: boolean | null, courseId?: string | null, gradesPublished?: boolean | null, htmlUrl?: any | null, postManually?: boolean | null, published?: boolean | null, hasSubmittedSubmissions?: boolean | null, inClosedGradingPeriod?: boolean | null, id: string, moderatedGrading?: boolean | null, checkpoints?: Array<{ __typename?: 'Checkpoint', unlockAt?: any | null, lockAt?: any | null, dueAt?: any | null, name?: string | null, pointsPossible: number, tag: string }> | null } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null } | null };

export type GradebookCourseOutcomeMasteryScalesQueryQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
}>;


export type GradebookCourseOutcomeMasteryScalesQueryQuery = { __typename?: 'Query', course?: { __typename?: 'Course', outcomeCalculationMethod?: { __typename?: 'OutcomeCalculationMethod', _id: string, calculationInt?: number | null, calculationMethod: string } | null, outcomeProficiency?: { __typename?: 'OutcomeProficiency', masteryPoints: number } | null } | null };

export type SetAssignmentPostPolicyMutationVariables = Exact<{
  assignmentId: Scalars['ID']['input'];
  postManually: Scalars['Boolean']['input'];
}>;


export type SetAssignmentPostPolicyMutation = { __typename?: 'Mutation', setAssignmentPostPolicy?: { __typename?: 'SetAssignmentPostPolicyPayload', postPolicy?: { __typename?: 'PostPolicy', postManually: boolean } | null, errors?: Array<{ __typename?: 'ValidationError', attribute?: string | null, message: string }> | null } | null };

export type SetCoursePostPolicyMutationVariables = Exact<{
  courseId: Scalars['ID']['input'];
  postManually: Scalars['Boolean']['input'];
}>;


export type SetCoursePostPolicyMutation = { __typename?: 'Mutation', setCoursePostPolicy?: { __typename?: 'SetCoursePostPolicyPayload', postPolicy?: { __typename?: 'PostPolicy', postManually: boolean } | null, errors?: Array<{ __typename?: 'ValidationError', attribute?: string | null, message: string }> | null } | null };

export type SetOverrideStatusMutationMutationVariables = Exact<{
  customGradeStatusId?: InputMaybe<Scalars['ID']['input']>;
  enrollmentId: Scalars['ID']['input'];
  gradingPeriodId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type SetOverrideStatusMutationMutation = { __typename?: 'Mutation', setOverrideStatus?: { __typename?: 'SetOverrideStatusPayload', errors?: Array<{ __typename?: 'ValidationError', attribute?: string | null, message: string }> | null } | null };

export type GetAssignmentRubricAssessmentsQueryVariables = Exact<{
  assignmentId: Scalars['ID']['input'];
}>;


export type GetAssignmentRubricAssessmentsQuery = { __typename?: 'Query', assignment?: { __typename?: 'Assignment', _id: string, rubricAssessment?: { __typename?: 'AssignmentRubricAssessment', assessmentsCount?: number | null } | null } | null };

export type GetCourseModulesQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
}>;


export type GetCourseModulesQuery = { __typename?: 'Query', course?: { __typename?: 'Course', modulesConnection?: { __typename?: 'ModuleConnection', nodes?: Array<{ __typename?: 'Module', id: string, moduleItems?: Array<{ __typename?: 'ModuleItem', content?: { __typename?: 'Assignment', name?: string | null, _id: string, peerReviews?: { __typename?: 'PeerReviews', anonymousReviews?: boolean | null } | null, assessmentRequestsForCurrentUser?: Array<{ __typename?: 'AssessmentRequest', anonymousId?: string | null, available?: boolean | null, createdAt?: any | null, workflowState: string, id: string, user: { __typename?: 'User', name?: any | null, id: string }, anonymizedUser?: { __typename?: 'User', name?: any | null, id: string } | null }> | null } | { __typename?: 'Discussion' } | { __typename?: 'ExternalTool' } | { __typename?: 'ExternalUrl' } | { __typename?: 'File' } | { __typename?: 'ModuleExternalTool' } | { __typename?: 'Page' } | { __typename?: 'Quiz' } | { __typename?: 'SubHeader' } | null }> | null } | null> | null } | null } | null };

export type FeaturesRubricQueryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FeaturesRubricQueryQuery = { __typename?: 'Query', rubric?: { __typename?: 'Rubric', title?: string | null, hasRubricAssociations: boolean, hidePoints?: boolean | null, buttonDisplay: string, ratingOrder: string, freeFormCriterionComments: boolean, workflowState: string, pointsPossible?: number | null, unassessed: boolean, id: string, criteria: Array<{ __typename?: 'RubricCriterion', learningOutcomeId?: string | null, ignoreForScoring: boolean, masteryPoints?: number | null, points?: number | null, longDescription?: string | null, description?: string | null, criterionUseRange: boolean, id: string, ratings?: Array<{ __typename?: 'RubricRating', description: string, longDescription?: string | null, points: number, id: string }> | null, outcome?: { __typename?: 'LearningOutcome', displayName?: string | null, title: string } | null }> } | null };

export type CreateCommentBankItemMutationVariables = Exact<{
  courseId: Scalars['ID']['input'];
  comment: Scalars['String']['input'];
}>;


export type CreateCommentBankItemMutation = { __typename?: 'Mutation', createCommentBankItem?: { __typename?: 'CreateCommentBankItemPayload', commentBankItem?: { __typename?: 'CommentBankItem', comment: string, id: string } | null, errors?: Array<{ __typename?: 'ValidationError', attribute?: string | null, message: string }> | null } | null };

export type DeleteCommentBankItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCommentBankItemMutation = { __typename?: 'Mutation', deleteCommentBankItem?: { __typename?: 'DeleteCommentBankItemPayload', commentBankItemId: string, errors?: Array<{ __typename?: 'ValidationError', attribute?: string | null, message: string }> | null } | null };

export type UpdateCommentBankItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  comment: Scalars['String']['input'];
}>;


export type UpdateCommentBankItemMutation = { __typename?: 'Mutation', updateCommentBankItem?: { __typename?: 'UpdateCommentBankItemPayload', commentBankItem?: { __typename?: 'CommentBankItem', _id: string, comment: string } | null, errors?: Array<{ __typename?: 'ValidationError', attribute?: string | null, message: string }> | null } | null };

export type CreateSubmissionCommentMutationVariables = Exact<{
  submissionId: Scalars['ID']['input'];
  comment: Scalars['String']['input'];
  fileIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  groupComment: Scalars['Boolean']['input'];
  draftComment?: InputMaybe<Scalars['Boolean']['input']>;
  mediaObjectType?: InputMaybe<Scalars['String']['input']>;
  mediaObjectId?: InputMaybe<Scalars['ID']['input']>;
  attempt?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateSubmissionCommentMutation = { __typename: 'Mutation', createSubmissionComment?: { __typename?: 'CreateSubmissionCommentPayload', submissionComment?: { __typename?: 'SubmissionComment', _id: string, id: string, comment?: string | null, read: boolean, draft: boolean, mediaCommentId?: string | null, author?: { __typename?: 'User', _id: string, id: string, name?: any | null } | null, attachments?: Array<{ __typename?: 'File', _id: string, displayName?: string | null, id: string, mimeClass?: string | null, url?: any | null }> | null } | null } | null };

export type DeleteSubmissionCommentMutationVariables = Exact<{
  submissionCommentId: Scalars['ID']['input'];
}>;


export type DeleteSubmissionCommentMutation = { __typename: 'Mutation', deleteSubmissionComment?: { __typename?: 'DeleteSubmissionCommentPayload', submissionComment?: { __typename?: 'SubmissionComment', _id: string, id: string, comment?: string | null, read: boolean, draft: boolean, author?: { __typename?: 'User', _id: string, id: string, name?: any | null } | null } | null } | null };

export type HideAssignmentGradesForSectionsMutationVariables = Exact<{
  assignmentId: Scalars['ID']['input'];
  sectionIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type HideAssignmentGradesForSectionsMutation = { __typename?: 'Mutation', hideAssignmentGradesForSections?: { __typename?: 'HideAssignmentGradesForSectionsPayload', progress?: { __typename?: 'Progress', _id: string, state: ProgressState } | null } | null };

export type PostAssignmentGradesMutationVariables = Exact<{
  assignmentId: Scalars['ID']['input'];
  gradedOnly?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PostAssignmentGradesMutation = { __typename?: 'Mutation', postAssignmentGrades?: { __typename?: 'PostAssignmentGradesPayload', progress?: { __typename?: 'Progress', _id: string, state: ProgressState } | null } | null };

export type PostDraftSubmissionCommentMutationVariables = Exact<{
  submissionCommentId: Scalars['ID']['input'];
}>;


export type PostDraftSubmissionCommentMutation = { __typename: 'Mutation', postDraftSubmissionComment?: { __typename?: 'PostDraftSubmissionCommentPayload', submissionComment?: { __typename?: 'SubmissionComment', _id: string, id: string, comment?: string | null, read: boolean, draft: boolean, author?: { __typename?: 'User', _id: string, id: string, name?: any | null } | null } | null } | null };

export type UpdateSpeedGraderSettingsPlatformSgMutationVariables = Exact<{
  gradeByQuestion: Scalars['Boolean']['input'];
}>;


export type UpdateSpeedGraderSettingsPlatformSgMutation = { __typename: 'Mutation', updateSpeedGraderSettings?: { __typename?: 'UpdateSpeedGraderSettingsPayload', speedGraderSettings: { __typename?: 'SpeedGraderSettings', gradeByQuestion: boolean } } | null };

export type UpdateSubmissionGradeStatusMutationVariables = Exact<{
  submissionId: Scalars['ID']['input'];
  latePolicyStatus?: InputMaybe<Scalars['String']['input']>;
  customGradeStatusId?: InputMaybe<Scalars['ID']['input']>;
  checkpointTag?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateSubmissionGradeStatusMutation = { __typename: 'Mutation', updateSubmissionGradeStatus?: { __typename?: 'UpdateSubmissionsGradeStatusPayload', submission?: { __typename?: 'Submission', gradingStatus?: SubmissionGradingStatus | null } | null } | null };

export type UpdateSubmissionScoreMutationVariables = Exact<{
  submissionId: Scalars['ID']['input'];
  score: Scalars['Int']['input'];
}>;


export type UpdateSubmissionScoreMutation = { __typename?: 'Mutation', updateSubmissionGrade?: { __typename?: 'UpdateSubmissionsGradePayload', submission?: { __typename?: 'Submission', _id: string, id: string, grade?: string | null, score?: number | null, user?: { __typename?: 'User', _id: string, id: string, name?: any | null } | null } | null, parentAssignmentSubmission?: { __typename?: 'Submission', _id: string, id: string, grade?: string | null, score?: number | null } | null, errors?: Array<{ __typename?: 'ValidationError', message: string }> | null } | null };

export type SetWorkflowMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  workflow: AssignmentState;
}>;


export type SetWorkflowMutation = { __typename?: 'Mutation', updateAssignment?: { __typename?: 'UpdateAssignmentPayload', assignment?: { __typename: 'Assignment', id: string, state: AssignmentState } | null } | null };

export type UserFieldsFragment = { __typename: 'User', name?: any | null, shortName?: any | null, sortableName?: any | null, avatarUrl?: any | null, email?: string | null, gid: string, lid: string } & { ' $fragmentName'?: 'UserFieldsFragment' };

export type AssignmentOverridesFragment = { __typename?: 'AssignmentOverrideConnection', nodes?: Array<{ __typename?: 'AssignmentOverride', title?: string | null, dueAt?: any | null, lockAt?: any | null, unlockAt?: any | null, gid?: string | null, lid?: string | null, set?: { __typename: 'AdhocStudents', students?: Array<{ __typename?: 'User', lid: string, studentName?: any | null }> | null } | { __typename: 'Course' } | { __typename: 'Group', lid: string, groupName?: string | null } | { __typename: 'Noop' } | { __typename: 'Section', lid: string, sectionName: string } | null } | null> | null } & { ' $fragmentName'?: 'AssignmentOverridesFragment' };

export type GetAssignmentQueryVariables = Exact<{
  assignmentLid: Scalars['ID']['input'];
}>;


export type GetAssignmentQuery = { __typename?: 'Query', assignment?: { __typename: 'Assignment', id: string, name?: string | null, description?: string | null, dueAt?: any | null, unlockAt?: any | null, lockAt?: any | null, pointsPossible?: number | null, state: AssignmentState, needsGradingCount?: number | null, onlyVisibleToOverrides: boolean, submissionTypes?: Array<SubmissionType> | null, allowedExtensions?: Array<string> | null, allowedAttempts?: number | null, anonymizeStudents?: boolean | null, hasSubmittedSubmissions?: boolean | null, submissionsDownloads?: number | null, lid: string, gid: string, peerReviews?: { __typename?: 'PeerReviews', enabled?: boolean | null } | null, lockInfo?: { __typename?: 'LockInfo', isLocked: boolean } | null, assignmentGroup?: { __typename?: 'AssignmentGroup', name?: string | null, lid: string } | null, modules?: Array<{ __typename?: 'Module', name?: string | null, lid: string }> | null, course?: { __typename?: 'Course', lid: string, modulesConnection?: { __typename?: 'ModuleConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } | null, assignmentGroupsConnection?: { __typename?: 'AssignmentGroupConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } | null } | null, assignmentOverrides?: (
      { __typename?: 'AssignmentOverrideConnection', pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean } }
      & { ' $fragmentRefs'?: { 'AssignmentOverridesFragment': AssignmentOverridesFragment } }
    ) | null, submissions?: { __typename?: 'SubmissionConnection', pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean }, nodes?: Array<{ __typename?: 'Submission', attempt: number, submissionStatus?: string | null, grade?: string | null, gradingStatus?: SubmissionGradingStatus | null, score?: number | null, state: SubmissionState, excused?: boolean | null, latePolicyStatus?: LatePolicyStatusType | null, submittedAt?: any | null, gid: string, lid: string, user?: (
          { __typename?: 'User' }
          & { ' $fragmentRefs'?: { 'UserFieldsFragment': UserFieldsFragment } }
        ) | null } | null> | null } | null } | null };

export type GetAssignmentForEditQueryVariables = Exact<{
  assignmentLid: Scalars['ID']['input'];
}>;


export type GetAssignmentForEditQuery = { __typename?: 'Query', assignment?: { __typename?: 'Assignment', state: AssignmentState, hasSubmittedSubmissions?: boolean | null, lid: string, course?: { __typename?: 'Course', lid: string } | null } | null };

export type Selective_Release_GetStudentsQueryQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type Selective_Release_GetStudentsQueryQuery = { __typename: 'Query', legacyNode?: { __typename?: 'Account' } | { __typename?: 'Assignment' } | { __typename?: 'AssignmentGroup' } | { __typename?: 'CommentBankItem' } | { __typename?: 'CommunicationChannel' } | { __typename?: 'ContentTag' } | { __typename?: 'Conversation' } | { __typename?: 'Course', id: string, name: string, enrollmentsConnection?: { __typename?: 'EnrollmentConnection', edges?: Array<{ __typename?: 'EnrollmentEdge', cursor: string, node?: { __typename?: 'Enrollment', user?: { __typename?: 'User', name?: any | null, sisId?: string | null, id: string } | null } | null } | null> | null } | null } | { __typename?: 'CustomGradeStatus' } | { __typename?: 'Discussion' } | { __typename?: 'DiscussionEntry' } | { __typename?: 'Enrollment' } | { __typename?: 'File' } | { __typename?: 'Folder' } | { __typename?: 'GradingPeriod' } | { __typename?: 'GradingPeriodGroup' } | { __typename?: 'GradingStandard' } | { __typename?: 'Group' } | { __typename?: 'GroupSet' } | { __typename?: 'InternalSetting' } | { __typename?: 'LearningOutcome' } | { __typename?: 'LearningOutcomeGroup' } | { __typename?: 'MediaObject' } | { __typename?: 'MessageableContext' } | { __typename?: 'MessageableUser' } | { __typename?: 'Module' } | { __typename?: 'ModuleItem' } | { __typename?: 'ModuleProgression' } | { __typename?: 'Notification' } | { __typename?: 'NotificationPolicy' } | { __typename?: 'OutcomeCalculationMethod' } | { __typename?: 'OutcomeFriendlyDescriptionType' } | { __typename?: 'OutcomeProficiency' } | { __typename?: 'Page' } | { __typename?: 'PostPolicy' } | { __typename?: 'Progress' } | { __typename?: 'Quiz' } | { __typename?: 'Rubric' } | { __typename?: 'Section' } | { __typename?: 'StandardGradeStatus' } | { __typename?: 'Submission' } | { __typename?: 'Term' } | { __typename?: 'UsageRights' } | { __typename?: 'User' } | null };

export type ActivityStreamSummaryFragment = { __typename?: 'ActivityStream', summary?: Array<{ __typename?: 'StreamSummaryItem', count?: number | null, notificationCategory?: string | null, type?: string | null, unreadCount?: number | null }> | null } & { ' $fragmentName'?: 'ActivityStreamSummaryFragment' };

export type CourseDashboardCardFragment = { __typename?: 'CourseDashboardCard', longName?: string | null, shortName?: string | null, useClassicFont?: boolean | null, subtitle?: string | null, published?: boolean | null, position?: number | null, pagesUrl?: any | null, originalName?: string | null, observee?: string | null, isK5Subject?: boolean | null, isHomeroom?: boolean | null, isFavorited?: boolean | null, image?: any | null, href?: string | null, frontPageTitle?: string | null, enrollmentType?: string | null, enrollmentState?: string | null, defaultView?: string | null, courseCode?: string | null, color?: string | null, canReadAnnouncements?: boolean | null, canManage?: boolean | null, canChangeCoursePublishState?: boolean | null, assetString?: string | null, term?: { __typename?: 'Term', name?: string | null, id: string } | null, links?: Array<{ __typename?: 'CourseDashboardCardLink', path?: string | null, label?: string | null, icon?: string | null, hidden?: boolean | null, cssClass?: string | null }> | null } & { ' $fragmentName'?: 'CourseDashboardCardFragment' };

export type CourseAndModulePicker_AssignmentsByCourseIdQueryQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
}>;


export type CourseAndModulePicker_AssignmentsByCourseIdQueryQuery = { __typename?: 'Query', course?: { __typename?: 'Course', _id: string, id: string, name: string, assignmentsConnection?: { __typename?: 'AssignmentConnection', nodes?: Array<{ __typename?: 'Assignment', _id: string, id: string, name?: string | null, rubricAssociation?: { __typename?: 'RubricAssociation', _id: string } | null } | null> | null } | null } | null };

export type SetRubricSelfAssessmentMutationVariables = Exact<{
  assignmentId: Scalars['ID']['input'];
  enabled: Scalars['Boolean']['input'];
}>;


export type SetRubricSelfAssessmentMutation = { __typename?: 'Mutation', setRubricSelfAssessment?: { __typename?: 'SetRubricSelfAssessmentPayload', errors?: Array<{ __typename?: 'ValidationError', attribute?: string | null, message: string }> | null } | null };

export type GetAssignmentRubricSelfAssessmentSettingsQueryVariables = Exact<{
  assignmentId: Scalars['ID']['input'];
}>;


export type GetAssignmentRubricSelfAssessmentSettingsQuery = { __typename?: 'Query', assignment?: { __typename?: 'Assignment', canUpdateRubricSelfAssessment?: boolean | null, rubricSelfAssessmentEnabled?: boolean | null } | null };

export type SharedRubricQueryQueryVariables = Exact<{
  rubricId: Scalars['ID']['input'];
}>;


export type SharedRubricQueryQuery = { __typename?: 'Query', rubric?: { __typename?: 'Rubric', title?: string | null, hasRubricAssociations: boolean, buttonDisplay: string, ratingOrder: string, freeFormCriterionComments: boolean, workflowState: string, pointsPossible?: number | null, unassessed: boolean, id: string, rubricAssociationForContext?: { __typename?: 'RubricAssociation', hidePoints: boolean, hideScoreTotal: boolean, hideOutcomeResults: boolean, useForGrading: boolean, id: string } | null, criteria: Array<{ __typename?: 'RubricCriterion', learningOutcomeId?: string | null, ignoreForScoring: boolean, masteryPoints?: number | null, points?: number | null, longDescription?: string | null, description?: string | null, criterionUseRange: boolean, id: string, ratings?: Array<{ __typename?: 'RubricRating', description: string, longDescription?: string | null, points: number, id: string }> | null, outcome?: { __typename?: 'LearningOutcome', displayName?: string | null, title: string } | null }> } | null };

export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","alias":{"kind":"Name","value":"gid"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"sortableName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const AssignmentOverridesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssignmentOverrides"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AssignmentOverrideConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"gid"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"lockAt"}},{"kind":"Field","name":{"kind":"Name","value":"unlockAt"}},{"kind":"Field","name":{"kind":"Name","value":"set"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Section"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","alias":{"kind":"Name","value":"sectionName"},"name":{"kind":"Name","value":"name"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Group"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","alias":{"kind":"Name","value":"groupName"},"name":{"kind":"Name","value":"name"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdhocStudents"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"students"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","alias":{"kind":"Name","value":"studentName"},"name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AssignmentOverridesFragment, unknown>;
export const ActivityStreamSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActivityStreamSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ActivityStream"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"notificationCategory"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"unreadCount"}}]}}]}}]} as unknown as DocumentNode<ActivityStreamSummaryFragment, unknown>;
export const CourseDashboardCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDashboardCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CourseDashboardCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"longName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"useClassicFont"}},{"kind":"Field","name":{"kind":"Name","value":"term"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"pagesUrl"}},{"kind":"Field","name":{"kind":"Name","value":"originalName"}},{"kind":"Field","name":{"kind":"Name","value":"observee"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isK5Subject"}},{"kind":"Field","name":{"kind":"Name","value":"isHomeroom"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorited"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"frontPageTitle"}},{"kind":"Field","name":{"kind":"Name","value":"enrollmentType"}},{"kind":"Field","name":{"kind":"Name","value":"enrollmentState"}},{"kind":"Field","name":{"kind":"Name","value":"defaultView"}},{"kind":"Field","name":{"kind":"Name","value":"courseCode"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"canReadAnnouncements"}},{"kind":"Field","name":{"kind":"Name","value":"canManage"}},{"kind":"Field","name":{"kind":"Name","value":"canChangeCoursePublishState"}},{"kind":"Field","name":{"kind":"Name","value":"assetString"}}]}}]} as unknown as DocumentNode<CourseDashboardCardFragment, unknown>;
export const SearchMutationLogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchMutationLog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assetString"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auditLogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutationLogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"assetString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assetString"}}},{"kind":"Argument","name":{"kind":"Name","value":"startTime"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"endTime"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assetString"}},{"kind":"Field","name":{"kind":"Name","value":"mutationId"}},{"kind":"Field","name":{"kind":"Name","value":"mutationName"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"realUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"params"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchMutationLogQuery, SearchMutationLogQueryVariables>;
export const UpsertStandardGradingStatusMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertStandardGradingStatusMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertStandardGradeStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"standardGradeStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<UpsertStandardGradingStatusMutationMutation, UpsertStandardGradingStatusMutationMutationVariables>;
export const UpsertCustomGradingStatusMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertCustomGradingStatusMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertCustomGradeStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customGradeStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<UpsertCustomGradingStatusMutationMutation, UpsertCustomGradingStatusMutationMutationVariables>;
export const DeleteCustomGradingStatusMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomGradingStatusMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCustomGradeStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customGradeStatusId"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCustomGradingStatusMutationMutation, DeleteCustomGradingStatusMutationMutationVariables>;
export const UpdateInternalSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateInternalSetting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"internalSettingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInternalSetting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"internalSettingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"internalSettingId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"internalSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"secret"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateInternalSettingMutation, UpdateInternalSettingMutationVariables>;
export const DeleteInternalSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteInternalSetting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"internalSettingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteInternalSetting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"internalSettingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"internalSettingId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"internalSettingId"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteInternalSettingMutation, DeleteInternalSettingMutationVariables>;
export const CreateInternalSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateInternalSetting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createInternalSetting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"internalSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"secret"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<CreateInternalSettingMutation, CreateInternalSettingMutationVariables>;
export const GetInternalSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInternalSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"internalSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"secret"}}]}}]}}]} as unknown as DocumentNode<GetInternalSettingsQuery, GetInternalSettingsQueryVariables>;
export const GetHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Submission"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submissionHistoriesConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"includeCurrentSubmission"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attempt"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetHistoryQuery, GetHistoryQueryVariables>;
export const GetCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetComments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Submission"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"forAttempt"},"value":{"kind":"IntValue","value":"1"}},{"kind":"ObjectField","name":{"kind":"Name","value":"peerReview"},"value":{"kind":"BooleanValue","value":false}}]}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCommentsQuery, GetCommentsQueryVariables>;
export const GetCoursePeopleQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCoursePeopleQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enrollmentRoleIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortField"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CourseUsersSortFieldType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CourseUsersSortDirectionType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enrollmentsSortField"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EnrollmentsSortFieldType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enrollmentsSortDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EnrollmentsSortDirectionType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"enrollmentRoleIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enrollmentRoleIds"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"excludeTestStudents"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortField"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortDirection"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"sisId"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"pronouns"}},{"kind":"Field","name":{"kind":"Name","value":"loginId"}},{"kind":"Field","name":{"kind":"Name","value":"enrollments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}},{"kind":"Argument","name":{"kind":"Name","value":"excludeConcluded"},"value":{"kind":"BooleanValue","value":true}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enrollmentsSortField"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enrollmentsSortDirection"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"lastActivityAt"}},{"kind":"Field","name":{"kind":"Name","value":"totalActivityTime"}},{"kind":"Field","name":{"kind":"Name","value":"canBeRemoved"}},{"kind":"Field","name":{"kind":"Name","value":"sisRole"}},{"kind":"Field","name":{"kind":"Name","value":"htmlUrl"}},{"kind":"Field","name":{"kind":"Name","value":"associatedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCoursePeopleQueryQuery, GetCoursePeopleQueryQueryVariables>;
export const GetDiscussionTopicDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDiscussionTopic"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"discussionTopicId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"legacyNode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"discussionTopicId"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"Discussion"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Discussion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"entryCounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repliesCount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetDiscussionTopicQuery, GetDiscussionTopicQueryVariables>;
export const GradebookQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GradebookQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rootOutcomeGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"outcomes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LearningOutcome"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"assessed"}},{"kind":"Field","name":{"kind":"Name","value":"calculationInt"}},{"kind":"Field","name":{"kind":"Name","value":"calculationMethod"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"masteryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"pointsPossible"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mastery"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"enrollmentsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"states"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"active"},{"kind":"EnumValue","value":"invited"},{"kind":"EnumValue","value":"completed"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"StudentEnrollment"},{"kind":"EnumValue","value":"StudentViewEnrollment"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sortableName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courseSectionId"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sectionsConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"submissionsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"states"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"graded"},{"kind":"EnumValue","value":"pending_review"},{"kind":"EnumValue","value":"submitted"},{"kind":"EnumValue","value":"ungraded"},{"kind":"EnumValue","value":"unsubmitted"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentId"}},{"kind":"Field","name":{"kind":"Name","value":"redoRequest"}},{"kind":"Field","name":{"kind":"Name","value":"submittedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"gradingPeriodId"}},{"kind":"Field","name":{"kind":"Name","value":"excused"}},{"kind":"Field","name":{"kind":"Name","value":"subAssignmentSubmissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"publishedGrade"}},{"kind":"Field","name":{"kind":"Name","value":"publishedScore"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentId"}},{"kind":"Field","name":{"kind":"Name","value":"gradeMatchesCurrentSubmission"}},{"kind":"Field","name":{"kind":"Name","value":"subAssignmentTag"}},{"kind":"Field","name":{"kind":"Name","value":"enteredGrade"}},{"kind":"Field","name":{"kind":"Name","value":"enteredScore"}},{"kind":"Field","name":{"kind":"Name","value":"excused"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignmentGroupsConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"groupWeight"}},{"kind":"Field","name":{"kind":"Name","value":"rules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dropHighest"}},{"kind":"Field","name":{"kind":"Name","value":"dropLowest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sisId"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gradingPeriodId"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymizeStudents"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"gradingType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"omitFromFinalGrade"}},{"kind":"Field","name":{"kind":"Name","value":"pointsPossible"}},{"kind":"Field","name":{"kind":"Name","value":"submissionTypes"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"groupCategoryId"}},{"kind":"Field","name":{"kind":"Name","value":"gradeGroupStudentsIndividually"}},{"kind":"Field","name":{"kind":"Name","value":"allowedAttempts"}},{"kind":"Field","name":{"kind":"Name","value":"anonymousGrading"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"gradesPublished"}},{"kind":"Field","name":{"kind":"Name","value":"htmlUrl"}},{"kind":"Field","alias":{"kind":"Name","value":"moderatedGrading"},"name":{"kind":"Name","value":"moderatedGradingEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"postManually"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"hasSubmittedSubmissions"}},{"kind":"Field","name":{"kind":"Name","value":"inClosedGradingPeriod"}},{"kind":"Field","name":{"kind":"Name","value":"checkpoints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unlockAt"}},{"kind":"Field","name":{"kind":"Name","value":"lockAt"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pointsPossible"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GradebookQueryQuery, GradebookQueryQueryVariables>;
export const GradebookStudentQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GradebookStudentQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"enrollmentTypes"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"StudentEnrollment"},{"kind":"EnumValue","value":"StudentViewEnrollment"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"enrollmentStates"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"active"},{"kind":"EnumValue","value":"invited"},{"kind":"EnumValue","value":"completed"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"userIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userIds"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enrollments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"grades"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unpostedCurrentGrade"}},{"kind":"Field","name":{"kind":"Name","value":"unpostedCurrentScore"}},{"kind":"Field","name":{"kind":"Name","value":"unpostedFinalGrade"}},{"kind":"Field","name":{"kind":"Name","value":"unpostedFinalScore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"loginId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"submissionsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"states"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"graded"},{"kind":"EnumValue","value":"pending_review"},{"kind":"EnumValue","value":"submitted"},{"kind":"EnumValue","value":"ungraded"},{"kind":"EnumValue","value":"unsubmitted"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"enteredScore"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentId"}},{"kind":"Field","name":{"kind":"Name","value":"submissionType"}},{"kind":"Field","name":{"kind":"Name","value":"submittedAt"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"sticker"}},{"kind":"Field","name":{"kind":"Name","value":"proxySubmitter"}},{"kind":"Field","name":{"kind":"Name","value":"excused"}},{"kind":"Field","name":{"kind":"Name","value":"late"}},{"kind":"Field","name":{"kind":"Name","value":"latePolicyStatus"}},{"kind":"Field","name":{"kind":"Name","value":"missing"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"cachedDueDate"}},{"kind":"Field","name":{"kind":"Name","value":"gradingPeriodId"}},{"kind":"Field","name":{"kind":"Name","value":"deductedPoints"}},{"kind":"Field","name":{"kind":"Name","value":"enteredGrade"}},{"kind":"Field","name":{"kind":"Name","value":"gradeMatchesCurrentSubmission"}},{"kind":"Field","name":{"kind":"Name","value":"customGradeStatus"}},{"kind":"Field","name":{"kind":"Name","value":"subAssignmentSubmissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"publishedGrade"}},{"kind":"Field","name":{"kind":"Name","value":"publishedScore"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentId"}},{"kind":"Field","name":{"kind":"Name","value":"gradeMatchesCurrentSubmission"}},{"kind":"Field","name":{"kind":"Name","value":"subAssignmentTag"}},{"kind":"Field","name":{"kind":"Name","value":"enteredGrade"}},{"kind":"Field","name":{"kind":"Name","value":"enteredScore"}},{"kind":"Field","name":{"kind":"Name","value":"excused"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GradebookStudentQueryQuery, GradebookStudentQueryQueryVariables>;
export const GradebookSubmissionCommentsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GradebookSubmissionCommentsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"submissionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"submissionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentsConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"htmlComment"}},{"kind":"Field","name":{"kind":"Name","value":"mediaObject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"mediaDownloadUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"mimeClass"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"htmlUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GradebookSubmissionCommentsQueryQuery, GradebookSubmissionCommentsQueryQueryVariables>;
export const GradebookEnrollmentsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GradebookEnrollmentsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enrollmentsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"states"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"active"},{"kind":"EnumValue","value":"invited"},{"kind":"EnumValue","value":"completed"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"StudentEnrollment"},{"kind":"EnumValue","value":"StudentViewEnrollment"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sortableName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courseSectionId"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GradebookEnrollmentsQueryQuery, GradebookEnrollmentsQueryQueryVariables>;
export const GradebookSubmissionsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GradebookSubmissionsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submissionsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"states"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"graded"},{"kind":"EnumValue","value":"pending_review"},{"kind":"EnumValue","value":"submitted"},{"kind":"EnumValue","value":"ungraded"},{"kind":"EnumValue","value":"unsubmitted"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentId"}},{"kind":"Field","name":{"kind":"Name","value":"redoRequest"}},{"kind":"Field","name":{"kind":"Name","value":"submittedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"gradingPeriodId"}},{"kind":"Field","name":{"kind":"Name","value":"excused"}},{"kind":"Field","name":{"kind":"Name","value":"subAssignmentSubmissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"publishedGrade"}},{"kind":"Field","name":{"kind":"Name","value":"publishedScore"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentId"}},{"kind":"Field","name":{"kind":"Name","value":"gradeMatchesCurrentSubmission"}},{"kind":"Field","name":{"kind":"Name","value":"subAssignmentTag"}},{"kind":"Field","name":{"kind":"Name","value":"enteredGrade"}},{"kind":"Field","name":{"kind":"Name","value":"enteredScore"}},{"kind":"Field","name":{"kind":"Name","value":"excused"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GradebookSubmissionsQueryQuery, GradebookSubmissionsQueryQueryVariables>;
export const GradebookSectionsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GradebookSectionsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sectionsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GradebookSectionsQueryQuery, GradebookSectionsQueryQueryVariables>;
export const GradebookOutcomesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GradebookOutcomesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rootOutcomeGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"outcomes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LearningOutcome"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"assessed"}},{"kind":"Field","name":{"kind":"Name","value":"calculationInt"}},{"kind":"Field","name":{"kind":"Name","value":"calculationMethod"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"masteryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"pointsPossible"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mastery"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GradebookOutcomesQueryQuery, GradebookOutcomesQueryQueryVariables>;
export const GradebookAssignmentGroupsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GradebookAssignmentGroupsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignmentGroupsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"groupWeight"}},{"kind":"Field","name":{"kind":"Name","value":"rules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dropHighest"}},{"kind":"Field","name":{"kind":"Name","value":"dropLowest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sisId"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GradebookAssignmentGroupsQueryQuery, GradebookAssignmentGroupsQueryQueryVariables>;
export const GradebookAssignmentsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GradebookAssignmentsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignmentsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gradingPeriodId"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymizeStudents"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"gradingType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"omitFromFinalGrade"}},{"kind":"Field","name":{"kind":"Name","value":"pointsPossible"}},{"kind":"Field","name":{"kind":"Name","value":"submissionTypes"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"groupCategoryId"}},{"kind":"Field","name":{"kind":"Name","value":"gradeGroupStudentsIndividually"}},{"kind":"Field","name":{"kind":"Name","value":"allowedAttempts"}},{"kind":"Field","name":{"kind":"Name","value":"anonymousGrading"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"gradesPublished"}},{"kind":"Field","name":{"kind":"Name","value":"htmlUrl"}},{"kind":"Field","alias":{"kind":"Name","value":"moderatedGrading"},"name":{"kind":"Name","value":"moderatedGradingEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"postManually"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"hasSubmittedSubmissions"}},{"kind":"Field","name":{"kind":"Name","value":"inClosedGradingPeriod"}},{"kind":"Field","name":{"kind":"Name","value":"checkpoints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unlockAt"}},{"kind":"Field","name":{"kind":"Name","value":"lockAt"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pointsPossible"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GradebookAssignmentsQueryQuery, GradebookAssignmentsQueryQueryVariables>;
export const GradebookCourseOutcomeMasteryScalesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GradebookCourseOutcomeMasteryScalesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"outcomeCalculationMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"calculationInt"}},{"kind":"Field","name":{"kind":"Name","value":"calculationMethod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"outcomeProficiency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"masteryPoints"}}]}}]}}]}}]} as unknown as DocumentNode<GradebookCourseOutcomeMasteryScalesQueryQuery, GradebookCourseOutcomeMasteryScalesQueryQueryVariables>;
export const SetAssignmentPostPolicyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetAssignmentPostPolicy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assignmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postManually"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setAssignmentPostPolicy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"assignmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assignmentId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"postManually"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postManually"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postPolicy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postManually"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<SetAssignmentPostPolicyMutation, SetAssignmentPostPolicyMutationVariables>;
export const SetCoursePostPolicyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCoursePostPolicy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postManually"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCoursePostPolicy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"postManually"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postManually"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postPolicy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postManually"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<SetCoursePostPolicyMutation, SetCoursePostPolicyMutationVariables>;
export const SetOverrideStatusMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetOverrideStatusMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customGradeStatusId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enrollmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gradingPeriodId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setOverrideStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"customGradeStatusId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customGradeStatusId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"enrollmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enrollmentId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"gradingPeriodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gradingPeriodId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<SetOverrideStatusMutationMutation, SetOverrideStatusMutationMutationVariables>;
export const GetAssignmentRubricAssessmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAssignmentRubricAssessments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assignmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assignmentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"rubricAssessment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assessmentsCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetAssignmentRubricAssessmentsQuery, GetAssignmentRubricAssessmentsQueryVariables>;
export const GetCourseModulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCourseModules"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modulesConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"moduleItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Assignment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"peerReviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymousReviews"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assessmentRequestsForCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"anonymousId"}},{"kind":"Field","name":{"kind":"Name","value":"available"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"workflowState"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"anonymizedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCourseModulesQuery, GetCourseModulesQueryVariables>;
export const FeaturesRubricQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FeaturesRubricQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rubric"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"hasRubricAssociations"}},{"kind":"Field","name":{"kind":"Name","value":"hidePoints"}},{"kind":"Field","name":{"kind":"Name","value":"buttonDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"ratingOrder"}},{"kind":"Field","name":{"kind":"Name","value":"freeFormCriterionComments"}},{"kind":"Field","name":{"kind":"Name","value":"workflowState"}},{"kind":"Field","name":{"kind":"Name","value":"pointsPossible"}},{"kind":"Field","name":{"kind":"Name","value":"unassessed"}},{"kind":"Field","name":{"kind":"Name","value":"criteria"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"longDescription"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"outcome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"learningOutcomeId"}},{"kind":"Field","name":{"kind":"Name","value":"ignoreForScoring"}},{"kind":"Field","name":{"kind":"Name","value":"masteryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"longDescription"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"criterionUseRange"}}]}}]}}]}}]} as unknown as DocumentNode<FeaturesRubricQueryQuery, FeaturesRubricQueryQueryVariables>;
export const CreateCommentBankItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCommentBankItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCommentBankItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"comment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comment"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentBankItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<CreateCommentBankItemMutation, CreateCommentBankItemMutationVariables>;
export const DeleteCommentBankItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCommentBankItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCommentBankItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentBankItemId"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCommentBankItemMutation, DeleteCommentBankItemMutationVariables>;
export const UpdateCommentBankItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCommentBankItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCommentBankItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"comment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comment"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentBankItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateCommentBankItemMutation, UpdateCommentBankItemMutationVariables>;
export const CreateSubmissionCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSubmissionComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"submissionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupComment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draftComment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mediaObjectType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mediaObjectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attempt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createSubmissionComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"submissionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"submissionId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"comment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fileIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileIds"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"groupComment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupComment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"draftComment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draftComment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mediaObjectType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mediaObjectType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mediaObjectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mediaObjectId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"attempt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attempt"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submissionComment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"read"}},{"kind":"Field","name":{"kind":"Name","value":"draft"}},{"kind":"Field","name":{"kind":"Name","value":"mediaCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mimeClass"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateSubmissionCommentMutation, CreateSubmissionCommentMutationVariables>;
export const DeleteSubmissionCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSubmissionComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"submissionCommentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"deleteSubmissionComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"submissionCommentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"submissionCommentId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submissionComment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"read"}},{"kind":"Field","name":{"kind":"Name","value":"draft"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DeleteSubmissionCommentMutation, DeleteSubmissionCommentMutationVariables>;
export const HideAssignmentGradesForSectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"HideAssignmentGradesForSections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assignmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sectionIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hideAssignmentGradesForSections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"assignmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assignmentId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sectionIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sectionIds"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"progress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]}}]} as unknown as DocumentNode<HideAssignmentGradesForSectionsMutation, HideAssignmentGradesForSectionsMutationVariables>;
export const PostAssignmentGradesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PostAssignmentGrades"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assignmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gradedOnly"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postAssignmentGrades"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"assignmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assignmentId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"gradedOnly"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gradedOnly"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"progress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]}}]} as unknown as DocumentNode<PostAssignmentGradesMutation, PostAssignmentGradesMutationVariables>;
export const PostDraftSubmissionCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PostDraftSubmissionComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"submissionCommentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"postDraftSubmissionComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"submissionCommentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"submissionCommentId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submissionComment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"read"}},{"kind":"Field","name":{"kind":"Name","value":"draft"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PostDraftSubmissionCommentMutation, PostDraftSubmissionCommentMutationVariables>;
export const UpdateSpeedGraderSettingsPlatformSgDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSpeedGraderSettingsPlatformSG"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gradeByQuestion"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"updateSpeedGraderSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gradeByQuestion"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gradeByQuestion"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"speedGraderSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gradeByQuestion"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSpeedGraderSettingsPlatformSgMutation, UpdateSpeedGraderSettingsPlatformSgMutationVariables>;
export const UpdateSubmissionGradeStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSubmissionGradeStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"submissionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"latePolicyStatus"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customGradeStatusId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkpointTag"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"updateSubmissionGradeStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"submissionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"submissionId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"latePolicyStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"latePolicyStatus"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"customGradeStatusId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customGradeStatusId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"checkpointTag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkpointTag"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gradingStatus"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSubmissionGradeStatusMutation, UpdateSubmissionGradeStatusMutationVariables>;
export const UpdateSubmissionScoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSubmissionScore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"submissionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"score"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSubmissionGrade"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"submissionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"submissionId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"score"},"value":{"kind":"Variable","name":{"kind":"Name","value":"score"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"parentAssignmentSubmission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSubmissionScoreMutation, UpdateSubmissionScoreMutationVariables>;
export const SetWorkflowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetWorkflow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workflow"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AssignmentState"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAssignment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workflow"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]}}]} as unknown as DocumentNode<SetWorkflowMutation, SetWorkflowMutationVariables>;
export const GetAssignmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAssignment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assignmentLid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assignmentLid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","alias":{"kind":"Name","value":"gid"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"applyOverrides"},"value":{"kind":"BooleanValue","value":false}}]},{"kind":"Field","name":{"kind":"Name","value":"unlockAt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"applyOverrides"},"value":{"kind":"BooleanValue","value":false}}]},{"kind":"Field","name":{"kind":"Name","value":"lockAt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"applyOverrides"},"value":{"kind":"BooleanValue","value":false}}]},{"kind":"Field","name":{"kind":"Name","value":"pointsPossible"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"needsGradingCount"}},{"kind":"Field","name":{"kind":"Name","value":"onlyVisibleToOverrides"}},{"kind":"Field","name":{"kind":"Name","value":"peerReviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enabled"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lockInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isLocked"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignmentGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"modules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"submissionTypes"}},{"kind":"Field","name":{"kind":"Name","value":"allowedExtensions"}},{"kind":"Field","name":{"kind":"Name","value":"allowedAttempts"}},{"kind":"Field","name":{"kind":"Name","value":"anonymizeStudents"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"modulesConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignmentGroupsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignmentOverrides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AssignmentOverrides"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasSubmittedSubmissions"}},{"kind":"Field","name":{"kind":"Name","value":"submissionsDownloads"}},{"kind":"Field","alias":{"kind":"Name","value":"submissions"},"name":{"kind":"Name","value":"submissionsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"states"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"submitted"},{"kind":"EnumValue","value":"unsubmitted"},{"kind":"EnumValue","value":"graded"},{"kind":"EnumValue","value":"ungraded"},{"kind":"EnumValue","value":"pending_review"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"gid"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"attempt"}},{"kind":"Field","name":{"kind":"Name","value":"submissionStatus"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"gradingStatus"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"excused"}},{"kind":"Field","name":{"kind":"Name","value":"latePolicyStatus"}},{"kind":"Field","name":{"kind":"Name","value":"submittedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AssignmentOverrides"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AssignmentOverrideConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"gid"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"lockAt"}},{"kind":"Field","name":{"kind":"Name","value":"unlockAt"}},{"kind":"Field","name":{"kind":"Name","value":"set"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Section"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","alias":{"kind":"Name","value":"sectionName"},"name":{"kind":"Name","value":"name"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Group"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","alias":{"kind":"Name","value":"groupName"},"name":{"kind":"Name","value":"name"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdhocStudents"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"students"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","alias":{"kind":"Name","value":"studentName"},"name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","alias":{"kind":"Name","value":"gid"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"sortableName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<GetAssignmentQuery, GetAssignmentQueryVariables>;
export const GetAssignmentForEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAssignmentForEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assignmentLid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assignmentLid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"hasSubmittedSubmissions"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"lid"},"name":{"kind":"Name","value":"_id"}}]}}]}}]}}]} as unknown as DocumentNode<GetAssignmentForEditQuery, GetAssignmentForEditQueryVariables>;
export const Selective_Release_GetStudentsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Selective_Release_GetStudentsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"legacyNode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"Course"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enrollmentsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"types"},"value":{"kind":"EnumValue","value":"StudentEnrollment"}},{"kind":"ObjectField","name":{"kind":"Name","value":"states"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"invited"},{"kind":"EnumValue","value":"active"}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sisId"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Selective_Release_GetStudentsQueryQuery, Selective_Release_GetStudentsQueryQueryVariables>;
export const CourseAndModulePicker_AssignmentsByCourseIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CourseAndModulePicker_AssignmentsByCourseIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"assignmentsConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rubricAssociation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CourseAndModulePicker_AssignmentsByCourseIdQueryQuery, CourseAndModulePicker_AssignmentsByCourseIdQueryQueryVariables>;
export const SetRubricSelfAssessmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetRubricSelfAssessment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assignmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enabled"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setRubricSelfAssessment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"assignmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assignmentId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"rubricSelfAssessmentEnabled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enabled"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<SetRubricSelfAssessmentMutation, SetRubricSelfAssessmentMutationVariables>;
export const GetAssignmentRubricSelfAssessmentSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAssignmentRubricSelfAssessmentSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assignmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assignmentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canUpdateRubricSelfAssessment"}},{"kind":"Field","name":{"kind":"Name","value":"rubricSelfAssessmentEnabled"}}]}}]}}]} as unknown as DocumentNode<GetAssignmentRubricSelfAssessmentSettingsQuery, GetAssignmentRubricSelfAssessmentSettingsQueryVariables>;
export const SharedRubricQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SharedRubricQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rubricId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rubric"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rubricId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"hasRubricAssociations"}},{"kind":"Field","name":{"kind":"Name","value":"rubricAssociationForContext"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hidePoints"}},{"kind":"Field","name":{"kind":"Name","value":"hideScoreTotal"}},{"kind":"Field","name":{"kind":"Name","value":"hideOutcomeResults"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"useForGrading"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"ratingOrder"}},{"kind":"Field","name":{"kind":"Name","value":"freeFormCriterionComments"}},{"kind":"Field","name":{"kind":"Name","value":"workflowState"}},{"kind":"Field","name":{"kind":"Name","value":"pointsPossible"}},{"kind":"Field","name":{"kind":"Name","value":"unassessed"}},{"kind":"Field","name":{"kind":"Name","value":"criteria"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"longDescription"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"outcome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"learningOutcomeId"}},{"kind":"Field","name":{"kind":"Name","value":"ignoreForScoring"}},{"kind":"Field","name":{"kind":"Name","value":"masteryPoints"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"longDescription"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"criterionUseRange"}}]}}]}}]}}]} as unknown as DocumentNode<SharedRubricQueryQuery, SharedRubricQueryQueryVariables>;