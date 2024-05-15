class Quests {
    constructor(questId, questName, questDescription, reward, createdBy, completedBy, createdAt, dueDate, applicantsId) {
        this.questId = questId;
        this.questName = questName;
        this.questDescription = questDescription;
        this.reward = reward;
        this.createdBy = createdBy;
        this.completedBy = completedBy;
        this.createdAt = createdAt;
        this.dueDate = dueDate;
        this.applicantsId = applicantsId;
    }
}

export default Quests;