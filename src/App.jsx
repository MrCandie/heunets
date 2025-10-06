import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import AddWorkButton from "./components/AddWorkButton";
import WorkItemSkeleton from "./components/WorkItemSkeleton";
import WorkList from "./components/WorkList";
import AddWorkItem from "./components/AddWorkItem";
import "./app.css";
import { createWorkItem, fetchWorkItems } from "./util/http";
import { toast } from "react-toastify";

import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
  });
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fpPromise = FingerprintJS.load({
      apiKey: "xWZCQigYgM1ucC989DUl",
    });

    fpPromise
      .then((fp) => fp.get())
      .then((result) => setUserId(result.visitorId));
  }, []);

  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["workItems", userId],
    queryFn: () => fetchWorkItems(userId),
    enabled: !!userId,
  });

  const { mutate: addWorkItem, isPending } = useMutation({
    mutationFn: createWorkItem,
    onSuccess: () => {
      toast.success("New item added");
      queryClient.invalidateQueries(["workItems"]);
      setShowModal(false);
      setFormData({
        title: "",
        description: "",
        priority: "medium",
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error);
      throw new Error();
    },
  });

  const handleAddItem = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description)
      return toast.error("Title and description are required");

    addWorkItem({ ...formData, userId });
  };

  function renderComponent() {
    if (isLoading) return <WorkItemSkeleton />;
    if (isError)
      return (
        <p className="text-center text-red-500 py-6">
          Failed to load work items.
        </p>
      );
    if (data?.data?.length === 0)
      return (
        <p className="text-center text-gray-500 py-6">No work items yet.</p>
      );

    return <WorkList items={data?.data || []} />;
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-md">
        <header className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Work Items</h2>
          <AddWorkButton onOpen={() => setShowModal(true)} />
        </header>

        {renderComponent()}
      </div>

      {showModal && (
        <AddWorkItem
          onClose={() => setShowModal(false)}
          handleAddItem={handleAddItem}
          setFormData={setFormData}
          formData={formData}
          isSubmitting={isPending}
        />
      )}
    </main>
  );
}

export default App;
